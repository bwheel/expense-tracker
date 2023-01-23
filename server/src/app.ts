
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({})

async function main() {
    const db_password = await prisma.password.create({
        data: {
            password: 'test',
            salt: 'test',
            workCost: 10
        }
    });
    console.log(db_password);
    const curr_user = await prisma.user.create({
        data: {
            email: 'bo.gus@some.com',
            currentPasswordId: db_password.id,
            firstName: "bo",
            lastName: "gus",
            preferredName: "bogus",
        }
    });
    console.log(curr_user);
    const same_user = await prisma.user.findFirstOrThrow({
        include: {
            currentPassword: true
        },
        where: {
            currentPassword: {
                id: db_password.id
            }
        }
    });
    console.log(same_user);
    if(curr_user.id === same_user.id){
        console.log('success')
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })