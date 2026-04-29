import bcrypt from 'bcryptjs'
import { ActorType, DataLevel, OnboardingStep, PrismaClient, Role } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const email = (process.env.DEFAULT_ADMIN_EMAIL || 'admin@pak-datathon.local').trim().toLowerCase()
  const password = (process.env.DEFAULT_ADMIN_PASSWORD || 'PakAdmin#2026').trim()
  const name = (process.env.DEFAULT_ADMIN_NAME || 'Administrateur PAK').trim()

  if (password.length < 8) {
    throw new Error('DEFAULT_ADMIN_PASSWORD doit contenir au moins 8 caractères.')
  }

  const passwordHash = await bcrypt.hash(password, 10)

  const user = await prisma.user.upsert({
    where: { email },
    update: {
      name,
      role: Role.ADMIN,
      password: passwordHash,
      onboardingStep: OnboardingStep.DASHBOARD_ACTIF,
    },
    create: {
      name,
      email,
      role: Role.ADMIN,
      password: passwordHash,
      onboardingStep: OnboardingStep.DASHBOARD_ACTIF,
      profile: {
        create: {
          domaineExpertise: 'Administration plateforme',
          dataLevel: DataLevel.EXPERT,
          actorType: ActorType.INSTITUTIONNEL,
          disponibilite: 'Plein temps',
        },
      },
    },
    select: {
      id: true,
      email: true,
      role: true,
    },
  })

  console.log(`Admin bootstrap réussi: ${user.email} (${user.role})`)
  console.log('Connexion admin: /auth/login?next=/admin')
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
