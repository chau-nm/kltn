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

 Date: 27/08/2023 13:33:08
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for defense_rating
-- ----------------------------
DROP TABLE IF EXISTS `defense_rating`;
CREATE TABLE `defense_rating`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `thesis_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `marker` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `content_score` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `analysis_result_score` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `feedback_lecturer_question_score` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `council_question_score` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `behavior_score` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_ca_thesis`(`thesis_id` ASC) USING BTREE,
  INDEX `fk_pr_user`(`marker` ASC) USING BTREE,
  CONSTRAINT `fk_pr_user` FOREIGN KEY (`marker`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of defense_rating
-- ----------------------------

-- ----------------------------
-- Table structure for defense_rating_score
-- ----------------------------
DROP TABLE IF EXISTS `defense_rating_score`;
CREATE TABLE `defense_rating_score`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `dr_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `student_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `score_1` double NOT NULL,
  `score_2` double NOT NULL,
  `score_3` double NOT NULL,
  `total_score` double NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_cas_ca`(`dr_id` ASC) USING BTREE,
  INDEX `fk_cas_user`(`student_id` ASC) USING BTREE,
  CONSTRAINT `fk_cas_ca` FOREIGN KEY (`dr_id`) REFERENCES `defense_rating` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_cas_user` FOREIGN KEY (`student_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of defense_rating_score
-- ----------------------------

-- ----------------------------
-- Table structure for lecturer
-- ----------------------------
DROP TABLE IF EXISTS `lecturer`;
CREATE TABLE `lecturer`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `user_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `degree` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of lecturer
-- ----------------------------
INSERT INTO `lecturer` VALUES ('972c84dd-09c0-4366-a5b5-4cc85a30007c', 'dae755d0-8efd-416c-8c4c-e7a6dfe16709', 'A', 'A');

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
INSERT INTO `notification` VALUES ('25dd0f56-ea5a-4633-8475-dd23bbf90fc7', 'Xin chào', '<p>Xin chào</p>', b'0', 1693086065665, 1693086065665);

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
INSERT INTO `notification_attachment` VALUES ('35276b2c-d3d6-4fe4-826b-cc9d31629ad9', '25dd0f56-ea5a-4633-8475-dd23bbf90fc7', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1693086059982-TB_Vv%20nop%20de%20cuong%20chi%20tiet%20KLTN_HK1_2023.2024.pdf?alt=media&token=feb0ba94-2838-4443-8047-dc6e0d18da8c', b'0', 1693086065666, 1693086065666);

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
INSERT INTO `refresh_token` VALUES ('2d779964-fe7d-498d-b4ed-ee7565870560', '12345', '2023-09-11 00:00:00', 1693085958247, 1693085958247);
INSERT INTO `refresh_token` VALUES ('48faac79-b1a1-4818-9ea7-a90eeded5de5', 'cb6307b7-a15a-4e20-9ae9-9a8c4ab34ad6', '2023-09-11 00:00:00', 1693097518146, 1693097518146);
INSERT INTO `refresh_token` VALUES ('699e466d-56c1-462b-8185-bda019e6e690', 'c26ad756-8a75-42e7-9b75-f987d621313e', '2023-09-11 00:00:00', 1693091998395, 1693091998395);

-- ----------------------------
-- Table structure for reviewer
-- ----------------------------
DROP TABLE IF EXISTS `reviewer`;
CREATE TABLE `reviewer`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `thesis_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `marker` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `page_number` int NULL DEFAULT NULL,
  `chapter_number` int NULL DEFAULT NULL,
  `table_number` int NULL DEFAULT NULL,
  `chart_number` int NULL DEFAULT NULL,
  `drawing_board_number` int NULL DEFAULT NULL,
  `image_number` int NULL DEFAULT NULL,
  `document_number` int NULL DEFAULT NULL,
  `calculation_software_number` int NULL DEFAULT NULL,
  `layout` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `writing` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `technical_terms` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `advantage` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `limitation` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
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
-- Records of reviewer
-- ----------------------------

-- ----------------------------
-- Table structure for reviewer_question
-- ----------------------------
DROP TABLE IF EXISTS `reviewer_question`;
CREATE TABLE `reviewer_question`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `reviewer_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `question` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of reviewer_question
-- ----------------------------

-- ----------------------------
-- Table structure for reviewer_score
-- ----------------------------
DROP TABLE IF EXISTS `reviewer_score`;
CREATE TABLE `reviewer_score`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `reviewer_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `student_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `score` double NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of reviewer_score
-- ----------------------------

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
INSERT INTO `role_user` VALUES ('07dd9d13-464a-4b1d-b3ac-f892c473f2b7', 'c26ad756-8a75-42e7-9b75-f987d621313e', 4, b'0', 1693089076485, 1693089076485);
INSERT INTO `role_user` VALUES ('1', '12345', 1, b'0', 0, 0);
INSERT INTO `role_user` VALUES ('5af35c38-e318-45e1-9aae-8200afee3829', '4d86b324-58a4-4267-87de-6d48edaf0b5b', 4, b'0', 1693089211627, 1693089211627);
INSERT INTO `role_user` VALUES ('6a782992-62c5-42fa-854d-b51e72e1b35c', 'cb6307b7-a15a-4e20-9ae9-9a8c4ab34ad6', 5, b'0', 1693097507405, 1693097507405);

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `user_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `student_class` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES ('394bfceb-2ff8-4117-a7a8-3549a2bee33e', '5ca95e1d-a06a-4734-9a8a-428e859d3c9a', 'A');
INSERT INTO `student` VALUES ('9b186efa-fedd-462a-8934-a97b345a24fd', 'cb6307b7-a15a-4e20-9ae9-9a8c4ab34ad6', 'A');
INSERT INTO `student` VALUES ('b671232f-12bf-4c52-b83b-5f3fb3635304', 'e022f125-d5cc-4e3c-be94-0f1eb63d2b6b', 'A');

-- ----------------------------
-- Table structure for thesis
-- ----------------------------
DROP TABLE IF EXISTS `thesis`;
CREATE TABLE `thesis`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `topic` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `school_year` int NOT NULL,
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
INSERT INTO `thesis` VALUES ('26c76325-d289-40a2-b96b-205c707c7ca1', 'asdsa', '<p>asdasd</p>', 2023, 1, 1, 'c26ad756-8a75-42e7-9b75-f987d621313e', b'0', 1693098585247, 1693098585247);

-- ----------------------------
-- Table structure for thesis_defense_calendar
-- ----------------------------
DROP TABLE IF EXISTS `thesis_defense_calendar`;
CREATE TABLE `thesis_defense_calendar`  (
  `id` int NOT NULL,
  `thesis_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `timestamp` bigint NOT NULL,
  `room` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of thesis_defense_calendar
-- ----------------------------

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
INSERT INTO `thesis_document` VALUES ('b8992c48-3d4f-418d-b185-31659734f4bd', '26c76325-d289-40a2-b96b-205c707c7ca1', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1693098580121-TB_Vv%20nop%20de%20cuong%20chi%20tiet%20KLTN_HK1_2023.2024.pdf?alt=media&token=e361c2b2-c4c2-4a71-a4fd-d5f8045f9a23', 1, b'0', 1693098585247, 1693098585247);

-- ----------------------------
-- Table structure for thesis_lecturer
-- ----------------------------
DROP TABLE IF EXISTS `thesis_lecturer`;
CREATE TABLE `thesis_lecturer`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `thesis_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `lecturer` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `is_active` bit(1) NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of thesis_lecturer
-- ----------------------------
INSERT INTO `thesis_lecturer` VALUES (1, '26c76325-d289-40a2-b96b-205c707c7ca1', 'cb6307b7-a15a-4e20-9ae9-9a8c4ab34ad6', b'0', b'0', 1693098586911, 1693098586911);

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
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of thesis_register_calendar
-- ----------------------------
INSERT INTO `thesis_register_calendar` VALUES (10, 1693086105629, 1695246105629, b'1', b'0', 1693086107953, 1693086107953);

-- ----------------------------
-- Table structure for thesis_review_calendar
-- ----------------------------
DROP TABLE IF EXISTS `thesis_review_calendar`;
CREATE TABLE `thesis_review_calendar`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `thesis_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `start_at` bigint NOT NULL,
  `end_at` bigint NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of thesis_review_calendar
-- ----------------------------

-- ----------------------------
-- Table structure for thesis_reviewer_comment
-- ----------------------------
DROP TABLE IF EXISTS `thesis_reviewer_comment`;
CREATE TABLE `thesis_reviewer_comment`  (
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
-- Records of thesis_reviewer_comment
-- ----------------------------

-- ----------------------------
-- Table structure for thesis_student
-- ----------------------------
DROP TABLE IF EXISTS `thesis_student`;
CREATE TABLE `thesis_student`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `thesis_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `student_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `is_active` bit(1) NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of thesis_student
-- ----------------------------
INSERT INTO `thesis_student` VALUES (1, '26c76325-d289-40a2-b96b-205c707c7ca1', 'c26ad756-8a75-42e7-9b75-f987d621313e', b'1', b'0', 1693098586902, 1693098586902);
INSERT INTO `thesis_student` VALUES (2, '26c76325-d289-40a2-b96b-205c707c7ca1', '4d86b324-58a4-4267-87de-6d48edaf0b5b', b'0', b'0', 1693098586908, 1693098586908);

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
  `is_student` bit(1) NOT NULL,
  `is_teacher` bit(1) NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`user_id`) USING BTREE,
  INDEX `user_id`(`user_id` ASC) USING BTREE,
  UNIQUE INDEX `unique_username`(`username` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('12345', '19130001', '$2a$10$U1IUwgSfyFYecbZ0H7VxwuyZGXJFVjhPchnyUy2UYKx8GBgSSQJpy', '', '', '', '2005-05-05', NULL, b'0', b'0', b'0', 0, 0);
INSERT INTO `user` VALUES ('4d86b324-58a4-4267-87de-6d48edaf0b5b', '19130003', '$2a$10$NtXbAxQ/cZr0vB2ErNL63.tf1chIP.XH1SZMzLQfg/73KslyMuPS6', 'male', 'A', 'A', '2023-08-28', 'A', b'1', b'0', b'0', 1693089211610, 1693089211610);
INSERT INTO `user` VALUES ('c26ad756-8a75-42e7-9b75-f987d621313e', '19130002', '$2a$10$4wF.Gn6CgmGWirjHN1VZs.ok8ios.sOWdJ7J5u2zViSC23zyDnM1K', 'male', 'A', 'T', '2023-08-20', 'CNTT', b'1', b'0', b'0', 1693089076474, 1693089076474);
INSERT INTO `user` VALUES ('cb6307b7-a15a-4e20-9ae9-9a8c4ab34ad6', 'lecturer1', '$2a$10$xxjAXsbvMy2uqNiWuWECAuV37BUMqydRTpd/YyJwYELufgtsnQHSC', 'male', 'A', 'A', '2023-08-28', 'A', b'1', b'0', b'0', 1693097507392, 1693097507392);

SET FOREIGN_KEY_CHECKS = 1;
