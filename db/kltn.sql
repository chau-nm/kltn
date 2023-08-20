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

 Date: 21/08/2023 00:28:24
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
  `marker` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `page_number` int NULL DEFAULT NULL,
  `chapter_number` int NULL DEFAULT NULL,
  `table_number` int NULL DEFAULT NULL,
  `chart_bumber` int NULL DEFAULT NULL,
  `drawing_board_number` int NULL DEFAULT NULL,
  `image_number` int NULL DEFAULT NULL,
  `document_number` int NULL DEFAULT NULL,
  `calculation_software_number` int NULL DEFAULT NULL,
  `layout` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `writing` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `technical_terms` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `advantage` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `defect` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `conclude` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `suggestion` int NULL DEFAULT NULL,
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
-- Table structure for critical_assessment_question
-- ----------------------------
DROP TABLE IF EXISTS `critical_assessment_question`;
CREATE TABLE `critical_assessment_question`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ca_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `question` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of critical_assessment_question
-- ----------------------------

-- ----------------------------
-- Table structure for critical_assessment_score
-- ----------------------------
DROP TABLE IF EXISTS `critical_assessment_score`;
CREATE TABLE `critical_assessment_score`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ca_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `student_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `score` double NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
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
INSERT INTO `notification` VALUES ('a8d3884f-bb67-4ded-91e9-e3e756a6bea8', 'Thông báo về việc đăng ký luận văn', '<p>Chào các em,</p><p><br></p><p>Khoa CNTT gửi đến các em thông báo về việc nộp đề cương chi tiết KLTN trong học kỳ 1 năm học 2023-3024</p><p><strong style=\"color: rgb(255, 0, 0);\">Thời gian&nbsp;nộp:&nbsp;từ ngày&nbsp;07/8/2023</strong><span style=\"color: rgb(255, 0, 0);\">&nbsp;đến ngày&nbsp;</span><strong style=\"color: rgb(255, 0, 0);\">09/8/2023</strong><span style=\"color: rgb(255, 0, 0);\">.</span></p><p><em>Chi tiết trong file đính kèm</em></p><p><br></p><p>Trân trọng</p>', b'1', 1692295892610, 1692295892610);
INSERT INTO `notification` VALUES ('bdddd1dd-5de7-4501-bf44-74f047c34613', 'Thông báo về việc đăng ký luận văn tốt nghiệp', '<p>Chào các em,</p><p><br></p><p>Khoa CNTT gửi đến các em thông báo về việc nộp đề cương chi tiết KLTN trong học kỳ 1 năm học 2023-3024</p><p><strong style=\"color: rgb(255, 0, 0);\">Thời gian&nbsp;nộp:&nbsp;từ ngày&nbsp;07/8/2023</strong><span style=\"color: rgb(255, 0, 0);\">&nbsp;đến ngày&nbsp;</span><strong style=\"color: rgb(255, 0, 0);\">09/8/2023</strong><span style=\"color: rgb(255, 0, 0);\">.</span></p><p><em>Chi tiết trong file đính kèm</em></p><p><br></p><p>Trân trọng</p>', b'0', 1692296126153, 1692296126153);

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
INSERT INTO `notification_attachment` VALUES ('713397bb-7d83-4675-8889-bb590bb39315', 'a8d3884f-bb67-4ded-91e9-e3e756a6bea8', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1692295887482?alt=media&token=768b70f5-71cd-457c-bcd9-8d3d4ebe88c0', b'0', 1692295892615, 1692295892615);
INSERT INTO `notification_attachment` VALUES ('ec6df1ad-3f6b-4a87-9cfb-349fe0ad1c61', 'bdddd1dd-5de7-4501-bf44-74f047c34613', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1692296119069-TB_Vv%20nop%20de%20cuong%20chi%20tiet%20KLTN_HK1_2023.2024.pdf?alt=media&token=82d6b57a-3d3c-4098-b58e-2d8e69d6e013', b'0', 1692296126153, 1692296126153);

-- ----------------------------
-- Table structure for protection_rating
-- ----------------------------
DROP TABLE IF EXISTS `protection_rating`;
CREATE TABLE `protection_rating`  (
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
  INDEX `fk_pr_user`(`marker` ASC) USING BTREE,
  CONSTRAINT `fk_pr_user` FOREIGN KEY (`marker`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of protection_rating
-- ----------------------------

-- ----------------------------
-- Table structure for protection_rating_score
-- ----------------------------
DROP TABLE IF EXISTS `protection_rating_score`;
CREATE TABLE `protection_rating_score`  (
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
  CONSTRAINT `fk_cas_ca` FOREIGN KEY (`ca_id`) REFERENCES `protection_rating` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_cas_user` FOREIGN KEY (`student_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
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
INSERT INTO `refresh_token` VALUES ('3ea42bef-38cb-4c7b-9d51-15afbbff93ff', '326ed05f-a2eb-4b56-a245-ae418b70f192', '2023-09-03 00:00:00', 1692385906682, 1692385906682);
INSERT INTO `refresh_token` VALUES ('414a8248-ab83-46c7-9ea2-d3d3c3cdf912', 'ff6bba42-86a4-4670-9432-6d35f519921a', '2023-09-03 00:00:00', 1692387603777, 1692387603777);
INSERT INTO `refresh_token` VALUES ('74cede8c-13fd-4617-8d31-18fda8527496', 'f3d5d78e-b9d9-469b-b4e6-7ba4f9cf1b77', '2023-09-02 00:00:00', 1692298320666, 1692298320666);
INSERT INTO `refresh_token` VALUES ('df399d8d-b6c8-4f96-9161-c82d740027cc', 'fd3f2c87-b7e7-4e38-9780-7245633d6bf7', '2023-09-03 00:00:00', 1692383552348, 1692383552349);

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
INSERT INTO `role_user` VALUES ('0629a521-14d6-4c7e-af4d-867b8e0de280', 'd33e0d1d-2bcd-4d35-8fb5-b221eb1f4670', 1, b'0', 1692388947958, 1692388947958);
INSERT INTO `role_user` VALUES ('2066a710-a09e-43ac-b4df-9acc356b2f23', 'f8acc013-9d57-4261-ad43-00b5577f915c', 1, b'0', 1692388669567, 1692388669567);
INSERT INTO `role_user` VALUES ('326ed05f-a2eb-4b56-a245-ae418b70f192', '326ed05f-a2eb-4b56-a245-ae418b70f192', 4, b'0', 1692385696468, 1692385696468);
INSERT INTO `role_user` VALUES ('3753fcb7-87fb-4784-89bb-55f05678e764', 'd33e0d1d-2bcd-4d35-8fb5-b221eb1f4670', 2, b'0', 1692388947962, 1692388947962);
INSERT INTO `role_user` VALUES ('42ec7997-24d1-4e8c-b9af-19e0eb966dea', '50680bd9-6914-4609-96b2-f6e347d01a3d', 2, b'0', 1692388548010, 1692388548010);
INSERT INTO `role_user` VALUES ('6edd2397-087c-416d-b135-d69997f0930d', '50680bd9-6914-4609-96b2-f6e347d01a3d', 1, b'0', 1692388548005, 1692388548005);
INSERT INTO `role_user` VALUES ('a5b31d8c-019f-4881-9f84-aa076fff9e13', '17e9e59c-276d-417f-9a51-5228443551a6', 1, b'0', 1692388738297, 1692388738297);
INSERT INTO `role_user` VALUES ('b6d7c18c-16a9-4e3a-a03d-292f00fb716c', '17e9e59c-276d-417f-9a51-5228443551a6', 2, b'0', 1692388738300, 1692388738300);
INSERT INTO `role_user` VALUES ('c215f002-5fc5-479a-a94c-32498c59235b', 'ff6bba42-86a4-4670-9432-6d35f519921a', 5, b'0', 1692385817563, 1692385817563);
INSERT INTO `role_user` VALUES ('d1a8ab1a-2991-4c7e-b055-b0c24b193115', 'f8acc013-9d57-4261-ad43-00b5577f915c', 2, b'0', 1692388669572, 1692388669572);
INSERT INTO `role_user` VALUES ('d8dd2fbd-8b7e-40aa-80f6-ee87a4e3580e', 'f3d5d78e-b9d9-469b-b4e6-7ba4f9cf1b77', 1, b'0', 1692381214219, 1692381214219);
INSERT INTO `role_user` VALUES ('fd3f2c87-b7e7-4e38-9780-7245633d6bf7', 'fd3f2c87-b7e7-4e38-9780-7245633d6bf7', 4, b'0', 1692300654497, 1692300654497);

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
INSERT INTO `thesis` VALUES ('c1b26005-9e89-40b5-bf20-48ff0750beff', 'Đề tài', '<p>Mô tả đề tài</p>', 2023, 1, 2, 'fd3f2c87-b7e7-4e38-9780-7245633d6bf7', b'0', 1692543726904, 1692543726904);

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
INSERT INTO `thesis_document` VALUES ('a7702e6f-5255-410e-8118-ce8f03864597', 'c1b26005-9e89-40b5-bf20-48ff0750beff', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1692543720482-phieu-danh-gia_gv_huong_dan_gv_phan_bien.docx?alt=media&token=315ec326-a37b-4ce8-8301-c996058dd902', 1, b'0', 1692543727006, 1692543727006);

-- ----------------------------
-- Table structure for thesis_outline_comment
-- ----------------------------
DROP TABLE IF EXISTS `thesis_outline_comment`;
CREATE TABLE `thesis_outline_comment`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `thesis_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `user_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `comment` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `result` int NULL DEFAULT NULL,
  `is_general` bit(1) NULL DEFAULT NULL,
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
INSERT INTO `thesis_outline_comment` VALUES ('62233820-3ac7-4464-890c-de97c5902b06', 'c1b26005-9e89-40b5-bf20-48ff0750beff', 'ff6bba42-86a4-4670-9432-6d35f519921a', '<p>Tốt</p>', 1, b'0', b'0', 1692549311052, 1692551068566);

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
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of thesis_register_calendar
-- ----------------------------
INSERT INTO `thesis_register_calendar` VALUES (8, 1692384964696, 1694372164696, b'1', b'0', 1692384973301, 1692384973301);

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
INSERT INTO `thesis_user` VALUES ('20c1ecd7-636e-408e-9284-0bf8e7f1dea6', 'c1b26005-9e89-40b5-bf20-48ff0750beff', '326ed05f-a2eb-4b56-a245-ae418b70f192', 1, 1, b'0', 1692543726904, 1692543726904);
INSERT INTO `thesis_user` VALUES ('91628345-c987-4bc5-b172-54841ec13316', 'c1b26005-9e89-40b5-bf20-48ff0750beff', 'ff6bba42-86a4-4670-9432-6d35f519921a', 2, 1, b'0', 1692543726904, 1692543726904);
INSERT INTO `thesis_user` VALUES ('bbc7c81a-7745-4873-9932-f34d0e11b239', 'c1b26005-9e89-40b5-bf20-48ff0750beff', 'fd3f2c87-b7e7-4e38-9780-7245633d6bf7', 1, 1, b'0', 1692543726904, 1692543726904);

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
INSERT INTO `user` VALUES ('17e9e59c-276d-417f-9a51-5228443551a6', '19130005', '$2a$10$hpOOlJEvg/fEhavni..4KOef6pBXY5VeIoUoBBjzfKaWm8AayV7Fi', 'male', 'A', 'A', '2023-08-29', 'asd', 'asd', b'0', 1692388738286, 1692388738286);
INSERT INTO `user` VALUES ('19ce8259-97e7-4b8c-b783-0a8048e3edac', '1913008', '$2a$10$wytMGtP9FkZJmQYtxElnAeJnxlvWsNybVEoNcKn.wbm4wZFAu61..', 'male', 'T', 'T', '2023-08-22', 'A', 'A', b'0', 1692389505765, 1692389505765);
INSERT INTO `user` VALUES ('1ceb468c-d050-436f-93a5-572fa3bdc8f6', '1913006', '$2a$10$AifAo5KynYGlEKwJDSH2aORivM5sajK8o3qgsGf2G3penzRQc/hyi', 'male', 'T', 'T', '2023-08-22', 'A', 'A', b'0', 1692389135239, 1692389135239);
INSERT INTO `user` VALUES ('326ed05f-a2eb-4b56-a245-ae418b70f192', '1913003', '$2a$10$9Ljc48v6dLB5QCxcbujGB.mVXwtKIOrCQaY6td6P25W0Pk5BEJXhK', 'male', 'C', 'B', '2023-08-22', 'A', 'C', b'0', 1692385696463, 1692385696463);
INSERT INTO `user` VALUES ('50680bd9-6914-4609-96b2-f6e347d01a3d', '19130005', '$2a$10$KnqXmZg2D8cckzE9.co8X.G8HtKFRKpHIoSjv.A7jqgUbije5nzWe', 'male', 'A', 'A', '2023-08-29', 'asd', 'asd', b'0', 1692388547991, 1692388547991);
INSERT INTO `user` VALUES ('94e43a74-3ffc-4ecc-891b-2b33dab767ec', '1913007', '$2a$10$aHze6ZMO4GXIKOjfvOQ2guM4acSEsUQQuo7p2gruxlRCRChs0zGDy', 'male', 'T', 'T', '2023-08-22', 'A', 'A', b'0', 1692389316305, 1692389316305);
INSERT INTO `user` VALUES ('9a6c199c-b93d-42e3-aa5e-498aa59d455c', '1913006', '$2a$10$FqNKW..nbYtZyhP8nAYZ9OaQBHTw94/b8NnwKgorp.fPVbBIA7WZG', 'male', 'T', 'T', '2023-08-22', 'A', 'A', b'0', 1692389035934, 1692389035934);
INSERT INTO `user` VALUES ('d33e0d1d-2bcd-4d35-8fb5-b221eb1f4670', '19130005', '$2a$10$SGEbufTO9ACvTJ9pxbPfMezzO74FgFbarCChgcoE3q.LsduptYkWC', 'male', 'A', 'A', '2023-08-29', 'asd', 'asd', b'0', 1692388947946, 1692388947946);
INSERT INTO `user` VALUES ('f3d5d78e-b9d9-469b-b4e6-7ba4f9cf1b77', '19130001', '$2a$10$/doe7n9zfHpqbxZPxXvC1ed3sjgZZwxsF77adgQNAadmpOMpLOqeW', 'male', '19130001@gmail.com', 'Nguyen Van C', '2005-06-22', 'CNTT', 'DH19DTA', b'0', 1232131321, 1692381277559);
INSERT INTO `user` VALUES ('f8acc013-9d57-4261-ad43-00b5577f915c', '19130005', '$2a$10$YFge764mQjxFmNGEinIegeJmP5JjPXAJe4SxH2LTKtjMumEehhnPu', 'male', 'A', 'A', '2023-08-29', 'asd', 'asd', b'0', 1692388669551, 1692388669551);
INSERT INTO `user` VALUES ('fd3f2c87-b7e7-4e38-9780-7245633d6bf7', '1913002', '$2a$10$/doe7n9zfHpqbxZPxXvC1ed3sjgZZwxsF77adgQNAadmpOMpLOqeW', 'male', 'Nguyễn Văn B', 'Nguyễn Văn B', '2023-08-18', 'CNTT', 'A', b'0', 1692300654412, 1692300654412);
INSERT INTO `user` VALUES ('ff6bba42-86a4-4670-9432-6d35f519921a', '1913004', '$2a$10$RWUuIJEpzdQx1k4dSRII6u2CHf7ZurUUbBjIVhdO5veo0fgKKgmRq', 'male', 'd@gmail.com', 'D', '2023-08-21', 'A', 'A', b'0', 1692385652907, 1692385817561);

SET FOREIGN_KEY_CHECKS = 1;
