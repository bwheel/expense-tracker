-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `create_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `delete_Date` DATETIME(3) NULL,
    `email` VARCHAR(191) NOT NULL,
    `preferred_name` VARCHAR(191) NULL,
    `first_name` VARCHAR(191) NULL,
    `last_name` VARCHAR(191) NULL,
    `current_password_id` INTEGER NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users_to_accounts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `create_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `delete_Date` DATETIME(3) NULL,
    `user_id` INTEGER NOT NULL,
    `account_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `passwords` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `create_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `delete_Date` DATETIME(3) NULL,
    `password` VARCHAR(191) NOT NULL,
    `salt` VARCHAR(191) NOT NULL,
    `work_cost` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `create_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `delete_Date` DATETIME(3) NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tags` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `create_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `delete_Date` DATETIME(3) NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `accounts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `create_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `delete_Date` DATETIME(3) NULL,
    `account_type` ENUM('CREDIT', 'DEBIT') NOT NULL DEFAULT 'CREDIT',
    `current_balance` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `companies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `create_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `delete_Date` DATETIME(3) NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `companies_to_accounts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `create_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `delete_Date` DATETIME(3) NULL,
    `company_id` INTEGER NOT NULL,
    `account_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transactions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `create_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `delete_Date` DATETIME(3) NULL,
    `amount` INTEGER NOT NULL,
    `account_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `expenses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `create_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `delete_Date` DATETIME(3) NULL,
    `expense_date` DATETIME(3) NULL,
    `company_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `category_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `expenses_to_tags` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `create_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `delete_Date` DATETIME(3) NULL,
    `expense_id` INTEGER NOT NULL,
    `tag_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `expenses_to_transactions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `create_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_Date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `delete_Date` DATETIME(3) NULL,
    `expense_id` INTEGER NOT NULL,
    `transaction_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_current_password_id_fkey` FOREIGN KEY (`current_password_id`) REFERENCES `passwords`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users_to_accounts` ADD CONSTRAINT `users_to_accounts_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users_to_accounts` ADD CONSTRAINT `users_to_accounts_account_id_fkey` FOREIGN KEY (`account_id`) REFERENCES `accounts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `companies_to_accounts` ADD CONSTRAINT `companies_to_accounts_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `companies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `companies_to_accounts` ADD CONSTRAINT `companies_to_accounts_account_id_fkey` FOREIGN KEY (`account_id`) REFERENCES `accounts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_account_id_fkey` FOREIGN KEY (`account_id`) REFERENCES `accounts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `expenses` ADD CONSTRAINT `expenses_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `companies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `expenses` ADD CONSTRAINT `expenses_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `expenses` ADD CONSTRAINT `expenses_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `expenses_to_tags` ADD CONSTRAINT `expenses_to_tags_expense_id_fkey` FOREIGN KEY (`expense_id`) REFERENCES `expenses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `expenses_to_tags` ADD CONSTRAINT `expenses_to_tags_tag_id_fkey` FOREIGN KEY (`tag_id`) REFERENCES `tags`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `expenses_to_transactions` ADD CONSTRAINT `expenses_to_transactions_expense_id_fkey` FOREIGN KEY (`expense_id`) REFERENCES `expenses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `expenses_to_transactions` ADD CONSTRAINT `expenses_to_transactions_transaction_id_fkey` FOREIGN KEY (`transaction_id`) REFERENCES `transactions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
