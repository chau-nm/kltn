/*
 Navicat Premium Data Transfer

 Source Server         : mysql-local
 Source Server Type    : MySQL
 Source Server Version : 100424
 Source Host           : localhost:3306
 Source Schema         : kltn

 Target Server Type    : MySQL
 Target Server Version : 100424
 File Encoding         : 65001

 Date: 09/08/2023 23:12:38
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for critical_assessment
-- ----------------------------
DROP TABLE IF EXISTS `critical_assessment`;
CREATE TABLE `critical_assessment`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `thesis_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `analysis_results` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `feedback_lecturer_question` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `council_question` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `behavior` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `marker` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_ca_thesis`(`thesis_id` ASC) USING BTREE,
  INDEX `fk_ca_user`(`marker` ASC) USING BTREE,
  CONSTRAINT `fk_ca_thesis` FOREIGN KEY (`thesis_id`) REFERENCES `thesis` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_ca_user` FOREIGN KEY (`marker`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of critical_assessment
-- ----------------------------

-- ----------------------------
-- Table structure for critical_assessment_score
-- ----------------------------
DROP TABLE IF EXISTS `critical_assessment_score`;
CREATE TABLE `critical_assessment_score`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ca_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `student_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `score_1` double NOT NULL,
  `score_2` double NOT NULL,
  `score_3` double NOT NULL,
  `total_score` double NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_cas_ca`(`ca_id` ASC) USING BTREE,
  INDEX `fk_cas_user`(`student_id` ASC) USING BTREE,
  CONSTRAINT `fk_cas_ca` FOREIGN KEY (`ca_id`) REFERENCES `critical_assessment` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_cas_user` FOREIGN KEY (`student_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of critical_assessment_score
-- ----------------------------

-- ----------------------------
-- Table structure for notification
-- ----------------------------
DROP TABLE IF EXISTS `notification`;
CREATE TABLE `notification`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `content` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of notification
-- ----------------------------
INSERT INTO `notification` VALUES ('0001', 'Thông báo B', 'Nội dung', b'0', 12345, 1687277474320);
INSERT INTO `notification` VALUES ('01f486a4-5fcd-45d5-86bb-85b9b114b230', 'Thông báo A', '<p><strong>Chào mọi người,</strong></p><p><em>Cảm ơn mọi người</em></p>', b'0', 1687358937005, 1687358937005);
INSERT INTO `notification` VALUES ('110b743e-7770-4705-8fac-fb2d9dc11f6e', 'ádasd', '<p>ádasd</p>', b'0', 1691334069753, 1691334069754);
INSERT INTO `notification` VALUES ('1ee563f8-8fdc-46a6-a6c3-8eaebadffb5d', 'asd', '<p>asdsad</p>', b'0', 1688476596618, 1690102021104);
INSERT INTO `notification` VALUES ('2ba9feb4-2455-4081-bb5d-b577673af2ad', 'Thong bao C', '<p>Hello</p>', b'1', 1688910331798, 1688918607903);
INSERT INTO `notification` VALUES ('3a13eb03-fab9-462d-9c72-9cb63b5a361f', 'Hello', '<p>ádasd</p>', b'0', 1691334091265, 1691334091265);
INSERT INTO `notification` VALUES ('3d3c49bd-522e-47bf-a2a6-0e6deb95de19', 'Thông báo A', '<p><strong>Chào mọi người,</strong></p><p><em>Cảm ơn mọi người</em></p>', b'0', 1687358912412, 1687358912412);
INSERT INTO `notification` VALUES ('3f88e06a-04e3-452c-aae2-9c4f9841bb1f', 'ssad', '', b'0', 1691313194781, 1691313194781);
INSERT INTO `notification` VALUES ('624391cd-c43c-4a8b-a0c7-b544727fc4d6', 'Thông báo B', '<p>ádsa</p>', b'0', 1687359299972, 1687359299972);
INSERT INTO `notification` VALUES ('9e9efad1-25c2-4f2d-8fb0-5c87f9efe560', 'asdsa', '', b'0', 1691313733582, 1691313733582);
INSERT INTO `notification` VALUES ('b6e7373e-820c-44a4-bfff-e667a58711b5', 'asdsad', '<p>asdasd</p>', b'0', 1691334017323, 1691334017323);
INSERT INTO `notification` VALUES ('ba1df643-47ca-47a2-b267-6c3c1a16031e', 'Thông báo A', '<p><strong>Chào mọi người,</strong></p><p><em>Cảm ơn mọi người</em></p>', b'0', 1687358864583, 1687358864583);
INSERT INTO `notification` VALUES ('baad4006-629f-452a-aeca-5d85ac384688', 'Thông báo A', '<p><strong>Chào mọi người,</strong></p><p><em>Cảm ơn mọi người</em></p>', b'0', 1687358847057, 1687358847057);
INSERT INTO `notification` VALUES ('f546581c-e20b-45df-8514-518d88347ab5', 'asdasd', '<p>asdasd</p>', b'0', 1691334586416, 1691334586416);

-- ----------------------------
-- Table structure for notification_attachment
-- ----------------------------
DROP TABLE IF EXISTS `notification_attachment`;
CREATE TABLE `notification_attachment`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `notification_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `attachment_url` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_notification_attachment`(`notification_id` ASC) USING BTREE,
  CONSTRAINT `fk_notification_attachment` FOREIGN KEY (`notification_id`) REFERENCES `notification` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of notification_attachment
-- ----------------------------
INSERT INTO `notification_attachment` VALUES ('069a1e7c-4f09-44d1-b932-5d01568d9e71', '624391cd-c43c-4a8b-a0c7-b544727fc4d6', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1687359293189?alt=media&token=16cb07e3-b014-4bbe-b758-9cb20d6717d9', b'0', 1687359299995, 0);
INSERT INTO `notification_attachment` VALUES ('738bd407-7998-44ac-8b8b-92d7debbcc90', '1ee563f8-8fdc-46a6-a6c3-8eaebadffb5d', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1690102018133?alt=media&token=8e8de2e3-58c8-4c76-ae02-b18f8b11715d', b'0', 1690102021153, 1690102021153);
INSERT INTO `notification_attachment` VALUES ('85cd480e-039d-4253-91c4-a31ff8e02698', '624391cd-c43c-4a8b-a0c7-b544727fc4d6', '1', b'0', 1687277474330, 0);
INSERT INTO `notification_attachment` VALUES ('8cfca459-9b6c-4218-810e-ecdd63edc0f4', 'b6e7373e-820c-44a4-bfff-e667a58711b5', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1691334013657?alt=media&token=963593d4-e249-43d4-aeed-784681beeab0', b'0', 1691334017325, 1691334017325);
INSERT INTO `notification_attachment` VALUES ('b1b23655-d8b7-41c5-b641-8981d7d0d4c9', '2ba9feb4-2455-4081-bb5d-b577673af2ad', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1688918603976?alt=media&token=b47cce12-7be8-4f35-a511-b16d99b561a8', b'0', 1688918607925, 1688918607925);
INSERT INTO `notification_attachment` VALUES ('b384178b-53d1-48b8-ba7a-efb3f2ba1f98', '2ba9feb4-2455-4081-bb5d-b577673af2ad', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1688910001484?alt=media&token=4182b68c-cab8-4936-b810-8cc7e8c2611f', b'0', 1688918607925, 1688918607925);
INSERT INTO `notification_attachment` VALUES ('b57a1ede-cd6c-4d03-8cc3-fb5457e1554f', '624391cd-c43c-4a8b-a0c7-b544727fc4d6', '2', b'0', 1687277474330, 0);
INSERT INTO `notification_attachment` VALUES ('d5273f25-a931-4e42-a687-46748fd15476', '110b743e-7770-4705-8fac-fb2d9dc11f6e', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1691334066625?alt=media&token=e1e0ddf7-7bde-486f-9575-f11b6760e5a8', b'0', 1691334069754, 1691334069754);
INSERT INTO `notification_attachment` VALUES ('ea117398-191d-4fda-9444-48624587fa18', '3a13eb03-fab9-462d-9c72-9cb63b5a361f', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1691334088319?alt=media&token=a2647acd-e5d3-4d48-beec-8f72c1f0e6f7', b'0', 1691334091265, 1691334091265);
INSERT INTO `notification_attachment` VALUES ('f2c82d41-8f17-4218-8aea-effaa00dfa4f', '9e9efad1-25c2-4f2d-8fb0-5c87f9efe560', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1691313730861?alt=media&token=752e761e-7c96-4837-9272-ad1b3554f83b', b'0', 1691313733583, 1691313733583);

-- ----------------------------
-- Table structure for protection_rating
-- ----------------------------
DROP TABLE IF EXISTS `protection_rating`;
CREATE TABLE `protection_rating`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `thesis_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `marker` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `page_number` int NOT NULL,
  `chapter_number` int NOT NULL,
  `table_number` int NOT NULL,
  `chart_bumber` int NOT NULL,
  `drawing_board_number` int NOT NULL,
  `image_number` int NOT NULL,
  `document_number` int NOT NULL,
  `calculation_software_number` int NOT NULL,
  `layout` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `writing` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `technical_terms` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `advantage` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `defect` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `conclude` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `suggestion` int NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bit(1) NOT NULL,
  `updated_at` bit(1) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_pr_thesis`(`thesis_id` ASC) USING BTREE,
  INDEX `fk_pr_user`(`marker` ASC) USING BTREE,
  CONSTRAINT `fk_pr_thesis` FOREIGN KEY (`thesis_id`) REFERENCES `thesis` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_pr_user` FOREIGN KEY (`marker`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of protection_rating
-- ----------------------------

-- ----------------------------
-- Table structure for protection_rating_question
-- ----------------------------
DROP TABLE IF EXISTS `protection_rating_question`;
CREATE TABLE `protection_rating_question`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `pr_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `question` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of protection_rating_question
-- ----------------------------

-- ----------------------------
-- Table structure for protection_rating_score
-- ----------------------------
DROP TABLE IF EXISTS `protection_rating_score`;
CREATE TABLE `protection_rating_score`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `pr_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `student_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `score` double NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of protection_rating_score
-- ----------------------------

-- ----------------------------
-- Table structure for refresh_token
-- ----------------------------
DROP TABLE IF EXISTS `refresh_token`;
CREATE TABLE `refresh_token`  (
  `token` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `user_id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `expiration_date` datetime NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`token`) USING BTREE,
  INDEX `fk_rf_user`(`user_id` ASC) USING BTREE,
  CONSTRAINT `fk_rf_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of refresh_token
-- ----------------------------
INSERT INTO `refresh_token` VALUES ('008f7d62-69a4-4a56-876d-a33e79754c63', 'caadasdcc-sdadas', '2023-08-21 00:00:00', 1691287927283, 1691287927283);
INSERT INTO `refresh_token` VALUES ('0135074b-cddc-42bd-b9f6-6e78f37f47e7', 'caadasdcc-sdadas', '2023-08-22 00:00:00', 1691425760671, 1691425760671);
INSERT INTO `refresh_token` VALUES ('04a097a8-bbf1-40c1-a3b9-9b7e64c513ed', 'caadasdcc-sdadas', '2023-08-24 00:00:00', 1691520484631, 1691520484631);
INSERT INTO `refresh_token` VALUES ('06430ddf-a5e8-4f0b-bae9-34c4d70d4beb', 'caadasdcc-sdadas', '2023-08-20 00:00:00', 1691232769180, 1691232769180);
INSERT INTO `refresh_token` VALUES ('0a2034bf-8721-4707-b095-29327db6ffe7', 'caadasdcc-sdadas', '2023-08-23 00:00:00', 1691512306785, 1691512306785);
INSERT INTO `refresh_token` VALUES ('152a93d5-ee08-4754-a7f4-bc8c782fc88a', 'caadasdcc-sdadas', '2023-08-23 00:00:00', 1691504494840, 1691504494840);
INSERT INTO `refresh_token` VALUES ('1ad8e68b-07d4-4a3f-af25-0846299fe2c2', 'caadasdcc-sdadas', '2023-08-23 00:00:00', 1691427716769, 1691427716769);
INSERT INTO `refresh_token` VALUES ('1b08cffa-5c69-460d-a7f1-626277902a8e', 'caadasdcc-sdadas', '2023-08-23 00:00:00', 1691428055882, 1691428055882);
INSERT INTO `refresh_token` VALUES ('22bd8a0f-095a-4c4f-aa19-aa23747e8e3c', 'caadasdcc-sdadas', '2023-08-21 00:00:00', 1691332315098, 1691332315098);
INSERT INTO `refresh_token` VALUES ('2367e0e1-8184-46c8-841d-c13f0a73a491', 'caadasdcc-sdadas', '2023-08-23 00:00:00', 1691512318218, 1691512318218);
INSERT INTO `refresh_token` VALUES ('24576d54-540f-4df9-a04a-391daca03b7b', 'caadasdcc-sdadas', '2023-08-23 00:00:00', 1691507998236, 1691507998236);
INSERT INTO `refresh_token` VALUES ('2d10a8fb-9cc1-4079-bb3b-d9a01b6b9f22', 'caadasdcc-sdadas', '2023-08-23 00:00:00', 1691427707518, 1691427707518);
INSERT INTO `refresh_token` VALUES ('2d4c0825-0e2f-4e92-9ab7-981a75696eb0', 'caadasdcc-sdadas', '2023-08-23 00:00:00', 1691428005689, 1691428005689);
INSERT INTO `refresh_token` VALUES ('3bbb9e83-e1b0-49d0-992e-4b27cabb4c60', 'caadasdcc-sdadas', '2023-08-21 00:00:00', 1691288745045, 1691288745045);
INSERT INTO `refresh_token` VALUES ('3db5dad6-de7c-45ce-899a-829d70d64171', 'caadasdcc-sdadas', '2023-08-23 00:00:00', 1691507049546, 1691507049546);
INSERT INTO `refresh_token` VALUES ('58248a19-89bc-4cb7-a715-ccb708d1a373', 'caadasdcc-sdadas', '2023-08-20 00:00:00', 1691225491095, 1691225491095);
INSERT INTO `refresh_token` VALUES ('6bd313b5-f028-42e3-ba8e-f06c933a41ea', 'caadasdcc-sdadas', '2023-08-23 00:00:00', 1691511521125, 1691511521125);
INSERT INTO `refresh_token` VALUES ('72711849-eeb7-48bf-8c35-c9a08115195f', 'caadasdcc-sdadas', '2023-08-23 00:00:00', 1691511472002, 1691511472002);
INSERT INTO `refresh_token` VALUES ('7daee812-de05-4f63-ab43-eb79ee4eab8c', 'caadasdcc-sdadas', '2023-08-23 00:00:00', 1691504589578, 1691504589578);
INSERT INTO `refresh_token` VALUES ('7dd875db-9171-4f68-989a-67205becdd17', 'caadasdcc-sdadas', '2023-08-19 00:00:00', 1691167239706, 1691167239706);
INSERT INTO `refresh_token` VALUES ('7ee49e1d-aaa4-4a26-b0ea-5ec7f25388bf', 'caadasdcc-sdadas', '2023-08-23 00:00:00', 1691427816967, 1691427816967);
INSERT INTO `refresh_token` VALUES ('8b9979e6-939f-49c8-b93c-756f10a82a54', 'caadasdcc-sdadas', '2023-08-20 00:00:00', 1691243916790, 1691243916790);
INSERT INTO `refresh_token` VALUES ('9b7bcbd5-1343-4c8a-a73c-4cf0383ab0b5', 'caadasdcc-sdadas', '2023-08-24 00:00:00', 1691519529562, 1691519529562);
INSERT INTO `refresh_token` VALUES ('9ebbd6b7-3aba-48c0-adc4-f28aa1e30697', 'caadasdcc-sdadas', '2023-08-23 00:00:00', 1691512225412, 1691512225412);
INSERT INTO `refresh_token` VALUES ('a1ed600a-1964-47c4-9dbc-6bd35529d0b2', 'caadasdcc-sdadas', '2023-08-21 00:00:00', 1691327153682, 1691327153682);
INSERT INTO `refresh_token` VALUES ('aa04cbc2-737e-470e-8a4b-ab85ef428879', 'caadasdcc-sdadas', '2023-08-21 00:00:00', 1691327134025, 1691327134025);
INSERT INTO `refresh_token` VALUES ('ae708131-2e8e-4be5-b1f2-77f0ec05d58f', 'caadasdcc-sdadas', '2023-08-24 00:00:00', 1691597360300, 1691597360300);
INSERT INTO `refresh_token` VALUES ('b778dc7f-2f7f-4dcd-8482-7ae6cce4ae79', 'caadasdcc-sdadas', '2023-08-24 00:00:00', 1691593323657, 1691593323657);
INSERT INTO `refresh_token` VALUES ('c4181471-38d2-4d28-be64-b2d5f3bc5105', 'caadasdcc-sdadas', '2023-08-21 00:00:00', 1691313162457, 1691313162457);
INSERT INTO `refresh_token` VALUES ('dba65024-1990-41b7-8475-8a68541c39c6', 'ac72e785-27e0-4a27-ad9b-0fe65101c849', '2023-08-24 00:00:00', 1691519708173, 1691519708173);
INSERT INTO `refresh_token` VALUES ('e42a9f7e-a2f6-4f0b-96ef-3fb4ecf25c65', 'caadasdcc-sdadas', '2023-08-23 00:00:00', 1691504591078, 1691504591078);
INSERT INTO `refresh_token` VALUES ('e7856a66-99f3-48bd-99fe-ab7b8d26c5a1', 'caadasdcc-sdadas', '2023-08-23 00:00:00', 1691504605731, 1691504605731);
INSERT INTO `refresh_token` VALUES ('f1e6a739-d2b7-4cc0-a13e-d15db006666b', 'caadasdcc-sdadas', '2023-08-20 00:00:00', 1691229110922, 1691229110922);
INSERT INTO `refresh_token` VALUES ('f397cac3-44df-41b6-805c-e1a62eae49af', 'caadasdcc-sdadas', '2023-08-24 00:00:00', 1691516031749, 1691516031749);

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role`  (
  `role_id` int NOT NULL,
  `role_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`role_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES (1, 'ADMIN', b'0', 0, 0);
INSERT INTO `role` VALUES (2, 'MINISTRY', b'0', 0, 0);
INSERT INTO `role` VALUES (3, 'COUNCIL', b'0', 0, 0);
INSERT INTO `role` VALUES (4, 'STUDENT', b'0', 0, 0);
INSERT INTO `role` VALUES (5, 'TEACHER', b'0', 0, 0);

-- ----------------------------
-- Table structure for role_user
-- ----------------------------
DROP TABLE IF EXISTS `role_user`;
CREATE TABLE `role_user`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `user_id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `role_id` int NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_role_user`(`role_id` ASC) USING BTREE,
  INDEX `fk_user_role`(`user_id` ASC) USING BTREE,
  CONSTRAINT `fk_role_user` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_user_role` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of role_user
-- ----------------------------
INSERT INTO `role_user` VALUES ('0001', 'caadasdcc-sdadas', 1, b'0', 0, 0);
INSERT INTO `role_user` VALUES ('0002', 'caadasdcc-sdadas', 4, b'0', 0, 0);
INSERT INTO `role_user` VALUES ('0003', 'caadasdcc-sdadas', 3, b'0', 0, 0);
INSERT INTO `role_user` VALUES ('0004', 'caadasdcc-sdadas', 2, b'0', 0, 0);
INSERT INTO `role_user` VALUES ('0006', '003', 5, b'0', 0, 0);
INSERT INTO `role_user` VALUES ('28b54a4d-54ef-493a-b0bf-8a2ba9af360f', '002', 4, b'0', 1691519668727, 1691519668727);
INSERT INTO `role_user` VALUES ('ac72e785-27e0-4a27-ad9b-0fe65101c849', 'ac72e785-27e0-4a27-ad9b-0fe65101c849', 4, b'0', 1691519633008, 1691519633008);
INSERT INTO `role_user` VALUES ('cb98698a-847e-48f3-9ada-8f2c99f446d7', '002', 5, b'0', 1691519668728, 1691519668728);

-- ----------------------------
-- Table structure for thesis
-- ----------------------------
DROP TABLE IF EXISTS `thesis`;
CREATE TABLE `thesis`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `topic` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `year` int NOT NULL,
  `semester` int NOT NULL,
  `status` int NOT NULL,
  `created_by` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of thesis
-- ----------------------------
INSERT INTO `thesis` VALUES ('5ecb601d-f4de-4e48-9de6-d1de8fb8ff24', 'dasdasd', '<p>xzxc</p>', 2000, 1, 2, 'caadasdcc-sdadas', b'0', 1691512242727, 1691512242727);
INSERT INTO `thesis` VALUES ('b48848f2-ef4a-4517-842a-671965e30075', 'adasd', '<p>asdasd</p>', 2000, 1, 1, 'ac72e785-27e0-4a27-ad9b-0fe65101c849', b'0', 1691520463071, 1691520463071);
INSERT INTO `thesis` VALUES ('c6462f29-1c7d-4784-8bd8-ae4158e28fa5', 'adasdsa', '<p>asdasd</p>', 2000, 1, 1, 'caadasdcc-sdadas', b'0', 1691520255642, 1691520255642);

-- ----------------------------
-- Table structure for thesis_document
-- ----------------------------
DROP TABLE IF EXISTS `thesis_document`;
CREATE TABLE `thesis_document`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `thesis_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `file_url` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `type` int NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of thesis_document
-- ----------------------------
INSERT INTO `thesis_document` VALUES ('15f0f013-6f11-4953-86b0-4ca6cf9b26cd', 'b48848f2-ef4a-4517-842a-671965e30075', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1691520457711?alt=media&token=bd879567-e8b4-4629-bde0-f38d77170ce5', 1, b'0', 1691520463144, 1691520463144);
INSERT INTO `thesis_document` VALUES ('36e05d33-0b1f-4ea9-8b13-94b5edebc0c0', 'c6462f29-1c7d-4784-8bd8-ae4158e28fa5', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1691520106999?alt=media&token=aac94a87-46dc-4c22-8009-52b13f6b2a9a', 1, b'0', 1691520255725, 1691520255725);
INSERT INTO `thesis_document` VALUES ('443f62c5-afe1-49e2-9a05-05a1023d43c3', '707b8ee6-40ad-4440-9eb0-1104ca27ba95', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1691327323001?alt=media&token=af05b69f-9251-406f-9479-0f480ee983e3', 1, b'0', 1691327329196, 1691327329196);
INSERT INTO `thesis_document` VALUES ('4e1540da-c886-4445-b17d-8c5d23ed1e33', 'b5250c0f-fedb-4f47-8b6d-46dc60005c76', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1691510834128?alt=media&token=63ee11aa-0b98-4e3c-9fd3-35a643dad03a', 1, b'0', 1691510839984, 1691510839984);
INSERT INTO `thesis_document` VALUES ('6b43f39d-fb36-487a-aca8-d43f1683f9c3', 'c6462f29-1c7d-4784-8bd8-ae4158e28fa5', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1691519720371?alt=media&token=49cd4027-d763-44fd-9a94-cbbab7c968ab', 1, b'0', 1691520255713, 1691520255713);
INSERT INTO `thesis_document` VALUES ('6d870dd0-14c8-46ba-90d5-23f9555ca7b8', 'bf5c9487-e422-4695-b22d-8cea7b43f328', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1691506718436?alt=media&token=6d4cfcf9-d3ae-48e7-84f6-d126d6668658', 1, b'0', 1691506726263, 1691506726263);
INSERT INTO `thesis_document` VALUES ('84b955f2-6679-451b-8819-90337e8bcd5e', 'b5250c0f-fedb-4f47-8b6d-46dc60005c76', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1691510783326?alt=media&token=4dd0e7af-1aef-422c-8426-c0779393395c', 1, b'0', 1691510839982, 1691510839982);
INSERT INTO `thesis_document` VALUES ('887b3002-a69b-40f4-bd3e-eb989a5a36c6', '5ecb601d-f4de-4e48-9de6-d1de8fb8ff24', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1691512238119?alt=media&token=a5604f50-2f86-411f-841f-94d5dd69dfe2', 1, b'0', 1691512242830, 1691512242830);
INSERT INTO `thesis_document` VALUES ('9565ea5d-b5f6-4b6c-b5c0-ea8b6104a276', 'c6462f29-1c7d-4784-8bd8-ae4158e28fa5', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1691520023066?alt=media&token=5197d4d7-5f5d-4a9c-a7f2-711c6959a230', 1, b'0', 1691520255723, 1691520255723);
INSERT INTO `thesis_document` VALUES ('a659ec8e-6b84-47b1-bedc-d511fcd4105f', '227de089-faad-433b-97c5-b42d4b493269', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1691506718436?alt=media&token=6d4cfcf9-d3ae-48e7-84f6-d126d6668658', 1, b'0', 1691506879478, 1691506879478);
INSERT INTO `thesis_document` VALUES ('aa3ce279-ce28-450d-8250-88794e71938b', 'c6462f29-1c7d-4784-8bd8-ae4158e28fa5', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1691520250378?alt=media&token=fa41a18e-1e2c-425c-9a25-bda4a2f221ea', 1, b'0', 1691520255727, 1691520255727);
INSERT INTO `thesis_document` VALUES ('b65a3cf4-57e9-444e-9d85-013379ae45a4', '227de089-faad-433b-97c5-b42d4b493269', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1691506874948?alt=media&token=c32f0aad-87d3-4b73-90ad-e40bd5fc32c0', 1, b'0', 1691506879480, 1691506879480);
INSERT INTO `thesis_document` VALUES ('b86be9dc-06ce-4b7c-b867-b5cd2b414c62', 'c6462f29-1c7d-4784-8bd8-ae4158e28fa5', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1691519922183?alt=media&token=721a1fb3-2b01-455f-b03d-3865f54a70e9', 1, b'0', 1691520255721, 1691520255721);
INSERT INTO `thesis_document` VALUES ('cf3f5526-ad5c-4e0c-9a77-6154cca079ce', 'c6462f29-1c7d-4784-8bd8-ae4158e28fa5', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1691519738218?alt=media&token=3c117aba-aff0-4cea-b033-5b56cff18e3a', 1, b'0', 1691520255719, 1691520255720);
INSERT INTO `thesis_document` VALUES ('f17555a4-2875-4374-97c5-a3e20e7ecb7b', 'ad1b2fe8-bd5a-4a17-803b-9f13f65208f1', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1691507530742?alt=media&token=2ed28ced-e883-4d63-a7d6-c0db102aff4b', 1, b'0', 1691507536741, 1691507536741);

-- ----------------------------
-- Table structure for thesis_outline_comment
-- ----------------------------
DROP TABLE IF EXISTS `thesis_outline_comment`;
CREATE TABLE `thesis_outline_comment`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `thesis_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `user_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `comment` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `order` int NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_to_thesis`(`thesis_id` ASC) USING BTREE,
  INDEX `fk_to_user`(`user_id` ASC) USING BTREE,
  CONSTRAINT `fk_to_thesis` FOREIGN KEY (`thesis_id`) REFERENCES `thesis` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_to_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of thesis_outline_comment
-- ----------------------------

-- ----------------------------
-- Table structure for thesis_register_calendar
-- ----------------------------
DROP TABLE IF EXISTS `thesis_register_calendar`;
CREATE TABLE `thesis_register_calendar`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `start_at` bigint NOT NULL,
  `end_at` bigint NOT NULL,
  `active` bit(1) NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of thesis_register_calendar
-- ----------------------------
INSERT INTO `thesis_register_calendar` VALUES (3, 1689576730550, 1692859930550, b'0', b'0', 1689576733906, 1689576733906);
INSERT INTO `thesis_register_calendar` VALUES (4, 1690098654606, 1693381854606, b'1', b'0', 1690098660629, 1690098660629);

-- ----------------------------
-- Table structure for thesis_report_calendar
-- ----------------------------
DROP TABLE IF EXISTS `thesis_report_calendar`;
CREATE TABLE `thesis_report_calendar`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `thesis_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `timestamp` bigint NOT NULL,
  `type` int NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of thesis_report_calendar
-- ----------------------------

-- ----------------------------
-- Table structure for thesis_user
-- ----------------------------
DROP TABLE IF EXISTS `thesis_user`;
CREATE TABLE `thesis_user`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `thesis_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `user_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `type` int NOT NULL,
  `status` int NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_thesis_user_thesis`(`thesis_id` ASC) USING BTREE,
  INDEX `fk_thesis_user_user`(`user_id` ASC) USING BTREE,
  CONSTRAINT `fk_thesis_user_thesis` FOREIGN KEY (`thesis_id`) REFERENCES `thesis` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_thesis_user_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of thesis_user
-- ----------------------------
INSERT INTO `thesis_user` VALUES ('0c9c2872-c812-43f3-bb06-9faa71072ab6', 'c6462f29-1c7d-4784-8bd8-ae4158e28fa5', 'ac72e785-27e0-4a27-ad9b-0fe65101c849', 1, 1, b'0', 1691520255642, 1691520255642);
INSERT INTO `thesis_user` VALUES ('a751665e-fb82-4a7f-9166-208ae9a900bf', 'c6462f29-1c7d-4784-8bd8-ae4158e28fa5', '003', 2, 0, b'0', 1691520255642, 1691520255642);
INSERT INTO `thesis_user` VALUES ('b128ae86-b9bb-4fac-9a05-f06b253f085b', '5ecb601d-f4de-4e48-9de6-d1de8fb8ff24', '002', 1, 1, b'0', 1691512242727, 1691512242727);
INSERT INTO `thesis_user` VALUES ('b7a08baa-74db-43a6-b179-a990bdc39bef', 'c6462f29-1c7d-4784-8bd8-ae4158e28fa5', 'caadasdcc-sdadas', 1, 0, b'0', 1691520255642, 1691520255642);
INSERT INTO `thesis_user` VALUES ('ce436ac4-21d1-4188-affc-5d9648fbfa95', 'b48848f2-ef4a-4517-842a-671965e30075', '002', 2, 0, b'0', 1691520463071, 1691520463071);
INSERT INTO `thesis_user` VALUES ('f203f5c4-e267-41a4-8113-96d405537a8a', '5ecb601d-f4de-4e48-9de6-d1de8fb8ff24', '003', 2, 1, b'0', 1691512242727, 1691512242727);
INSERT INTO `thesis_user` VALUES ('f347a5ff-8dbc-4321-93ac-f815a3211717', 'b48848f2-ef4a-4517-842a-671965e30075', 'ac72e785-27e0-4a27-ad9b-0fe65101c849', 1, 1, b'0', 1691520463071, 1691520463071);
INSERT INTO `thesis_user` VALUES ('f53f8d70-9fdb-4d58-93fb-8b35c228ac31', 'b48848f2-ef4a-4517-842a-671965e30075', '002', 1, 0, b'0', 1691520463071, 1691520463071);
INSERT INTO `thesis_user` VALUES ('f8f97660-bda9-4108-970a-0a8fc04570e1', '5ecb601d-f4de-4e48-9de6-d1de8fb8ff24', 'caadasdcc-sdadas', 1, 1, b'0', 1691512242727, 1691512242727);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `user_id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `gender` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `fname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `birthday` date NOT NULL,
  `faculty` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `student_class` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('002', 'std2', '$2a$12$k.cYiDQKkwoEtQ/5RCKnneXD1rOrMidAkMWDE4tems3u1PstBRZXS', '', '', 'Nguyen Van C', '2001-03-16', 'CNTT', 'DH19DTA', b'0', 13212315, 1691519668719);
INSERT INTO `user` VALUES ('003', 'teacher1', '$2a$12$k.cYiDQKkwoEtQ/5RCKnneXD1rOrMidAkMWDE4tems3u1PstBRZXS', '', '', 'Nguyen Van D', '2001-03-16', 'CNTT', 'DH19DTA', b'0', 165613, 1512321);
INSERT INTO `user` VALUES ('ac72e785-27e0-4a27-ad9b-0fe65101c849', 'test1', '$2a$10$Ue3w7xS9G3/929BQMwsV9.PEaRZwrU6tT94O.j7VPUGAh/fU.Oj2G', 'male', 'test1', 'test1', '2023-08-09', 'CNTT', 'A1', b'0', 1691519633003, 1691519633003);
INSERT INTO `user` VALUES ('caadasdcc-sdadas', 'chau-nm', '$2a$12$k.cYiDQKkwoEtQ/5RCKnneXD1rOrMidAkMWDE4tems3u1PstBRZXS', '', '', 'Nguyen Van B', '2005-06-22', 'CNTT', 'DH19DTA', b'0', 1232131321, 1687074361598);

SET FOREIGN_KEY_CHECKS = 1;
