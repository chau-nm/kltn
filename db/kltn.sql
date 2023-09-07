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

 Date: 08/09/2023 06:31:43
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
INSERT INTO `defense_rating` VALUES ('3ff25d09-2dcd-46d3-a7a8-d4d5c6119dd8', '446ba792-5747-4e36-9000-1845b4e046c3', 'cda92fcb-04fd-438b-a9f7-bf321b54197e', '16', '16', '16', '16', '16', b'0', 1694127792766, 1694127792766);
INSERT INTO `defense_rating` VALUES ('8414ca93-48df-40ea-85ff-44b99f1b2904', '63893d42-920f-4240-bce1-8ef3584522ab', 'd195b534-33df-4238-8b20-d7d81892da25', '16', '16', '16', '16', '16', b'0', 1694126389983, 1694126389983);
INSERT INTO `defense_rating` VALUES ('86a13776-2858-4f54-8451-cc6f9cc42006', '63893d42-920f-4240-bce1-8ef3584522ab', '94382753-88a7-4c56-87a1-f89a6ec29edb', '16', '16', '16', '16', '16', b'0', 1694126462623, 1694126462623);
INSERT INTO `defense_rating` VALUES ('b405e757-49dd-456e-9f43-2d00bb1021fd', '446ba792-5747-4e36-9000-1845b4e046c3', '6b7b17ee-8bed-411e-b3e0-e52bc822f76c', '16', '16', '16', '16', '16', b'0', 1694127839246, 1694127839246);

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
INSERT INTO `defense_rating_score` VALUES ('41d164c7-b563-45ac-9945-fa05930619c6', '3ff25d09-2dcd-46d3-a7a8-d4d5c6119dd8', 'ee5fcb0f-a9dc-4b19-b600-ff76f9ea19b7', 3.2, 3.2, 1.6, 8, b'0', 1694127792766, 1694127792766);
INSERT INTO `defense_rating_score` VALUES ('729f37f6-7edf-4767-9d4c-dc4e955db275', 'b405e757-49dd-456e-9f43-2d00bb1021fd', 'ee5fcb0f-a9dc-4b19-b600-ff76f9ea19b7', 3.2, 3.2, 1.6, 8, b'0', 1694127839246, 1694127839246);
INSERT INTO `defense_rating_score` VALUES ('a4b85dfa-e5a5-4c33-a323-96346d362177', '86a13776-2858-4f54-8451-cc6f9cc42006', '536d42cf-1980-4679-9533-2be362efef9f', 3.2, 3.2, 1.6, 8, b'0', 1694126462623, 1694126462623);
INSERT INTO `defense_rating_score` VALUES ('a95a3887-5f7b-4f34-885f-2dc8429569f8', 'b405e757-49dd-456e-9f43-2d00bb1021fd', '6b498ec1-4390-4898-b344-8d73b5ad7980', 3.2, 3.2, 1.6, 8, b'0', 1694127839245, 1694127839245);
INSERT INTO `defense_rating_score` VALUES ('b9c27388-dc9e-4ccc-aab2-0d14948e1d55', '3ff25d09-2dcd-46d3-a7a8-d4d5c6119dd8', '6b498ec1-4390-4898-b344-8d73b5ad7980', 3.2, 3.2, 1.6, 8, b'0', 1694127792766, 1694127792766);
INSERT INTO `defense_rating_score` VALUES ('d2815fa0-179e-4654-97f7-049824755797', '86a13776-2858-4f54-8451-cc6f9cc42006', '0f7d2151-210e-4720-9baf-e27540dc0178', 3.2, 3.2, 1.6, 8, b'0', 1694126462623, 1694126462623);
INSERT INTO `defense_rating_score` VALUES ('e07c797d-d2f4-43bb-ba41-23a4d83b0391', '8414ca93-48df-40ea-85ff-44b99f1b2904', '0f7d2151-210e-4720-9baf-e27540dc0178', 3.2, 3.2, 1.6, 8, b'0', 1694126389983, 1694126389983);
INSERT INTO `defense_rating_score` VALUES ('fba82932-02ba-4947-adc6-16df2d996c1d', '8414ca93-48df-40ea-85ff-44b99f1b2904', '536d42cf-1980-4679-9533-2be362efef9f', 3.2, 3.2, 1.6, 8, b'0', 1694126389982, 1694126389982);

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
INSERT INTO `lecturer` VALUES ('52784876-c65b-4a67-b8a8-7534b8155c2c', 'cda92fcb-04fd-438b-a9f7-bf321b54197e', 'TH.S', ' ');
INSERT INTO `lecturer` VALUES ('7716cfe4-1c45-4cea-b21e-03786e482a29', '9ef47ebf-6b39-4d60-86c7-cc56e284c4d6', ' ', ' ');
INSERT INTO `lecturer` VALUES ('7b3af911-bc69-4ad5-bde0-f1b7f7c87546', 'd195b534-33df-4238-8b20-d7d81892da25', 'ThS', ' ');
INSERT INTO `lecturer` VALUES ('7f7fd2a4-19d7-4cda-9dac-0400e0f035e1', '9dfa3f6b-d9db-4edd-b203-3f503f86cee7', 'TS', ' ');
INSERT INTO `lecturer` VALUES ('9ecf2d89-4177-4fc1-be23-a94cffa43c15', '6b7b17ee-8bed-411e-b3e0-e52bc822f76c', 'ThS', ' ');
INSERT INTO `lecturer` VALUES ('a9dfd373-6549-4c02-b5f6-72da9377cdc7', '94382753-88a7-4c56-87a1-f89a6ec29edb', 'ThS', ' ');
INSERT INTO `lecturer` VALUES ('ef641072-0c45-4440-a3c2-0a9e714b6186', '0d257149-8b65-4727-bec5-9ec8b4c2e596', 'ThS', ' ');
INSERT INTO `lecturer` VALUES ('f5bc1824-12d6-4cdd-bea1-e9c44e8dcb7d', '1d84f16e-f21e-43dd-8b21-61c357142d1d', 'ThS', ' ');

-- ----------------------------
-- Table structure for notification
-- ----------------------------
DROP TABLE IF EXISTS `notification`;
CREATE TABLE `notification`  (
  `id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `content` varchar(10000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of notification
-- ----------------------------
INSERT INTO `notification` VALUES ('089e0989-b71e-4169-bd67-a02b82bbbb59', 'Thông báo về việc đăng ký học phần cho sinh viên học kỳ I năm 2023 - 2024', '<p>Thân gửi các em sinh viên,</p><p>Trường Đại học Nông Lâm TP.HCM thông báo về việc đăng ký học phần cho sinh viên học kỳ I năm 2023 - 2024.&nbsp;<a href=\"https://drive.google.com/drive/folders/1JFUN4Ci4TBuGCNyNaHGPbmX_0C5ahNox?usp=sharing\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(17, 85, 204);\">Nội dung chi tiết mời xem tại đây.</a></p><p>Thân mến.</p>', b'0', 1694125455769, 1694125455769);
INSERT INTO `notification` VALUES ('39870d33-044f-4bfc-9a72-bc47842dfc74', '[MỞ BÌNH CHỌN CUỘC THI THIẾT KẾ ÁO – DÂY ĐEO KHOA CÔNG NGHỆ THÔNG TIN NĂM 2023]', '<p>Thân gửi các bạn sinh viên khoa Công nghệ Thông tin trường Đại học Nông Lâm TP. HCM,</p><p>&nbsp;&nbsp;Lời đầu tiên, BTC xin gửi lời cảm ơn đến tất cả các bạn sinh viên đã tham gia cuộc thi “Thiết kế áo đồng phục và dây đeo khoa Công nghệ Thông tin năm 2023”.</p><p>&nbsp;Sau những phiên làm việc nghiêm túc, BTC đã thống nhất chọn ra được 7 bài thi có thiết kế tối ưu, phù hợp với các tiêu chí của chương trình để đến với vòng bình chọn.</p><p>&nbsp;Và bây giờ, công đoạn quan trọng nhất của cuộc thi sẽ được tiến hành bởi chính các bạn, hãy cùng xem xét và bình chọn cho những bài thi mà bạn cảm thấy xuất sắc nhất.</p><p><strong style=\"color: rgb(68, 114, 196);\">Thông tin cuộc bình chọn:</strong></p><p>Các bài thi được đăng trên fanpage khoa CNTT:&nbsp;<a href=\"https://www.facebook.com/kcntt.nlu\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(17, 85, 204);\">https://www.facebook.com/kcntt.nlu</a></p><p><strong style=\"color: red;\"><em>Lưu ý:</em></strong><span style=\"color: red;\">&nbsp;</span>Thể lệ bình chọn đã được ghi chi tiết tại mỗi bài thi, các bạn sinh viên vui lòng thực hiện theo các yêu cầu bình chọn.</p><p>&nbsp;BTC mong rằng, tất cả các bạn sinh viên đều tích cực tham gia bình chọn. Sự ủng hộ của các bạn sẽ là nguồn động lực to lớn và là bước đệm để có thể đem lại các hoạt động, phong trào cực kì sôi động trong tương lai.</p><p>&nbsp;Cuối lời, BTC xin chân thành cảm ơn tất cả các bạn sinh viên, chúc các bạn có một ngày vui vẻ và hạnh phúc.</p><p>Thân gửi./.</p>', b'0', 1694115825801, 1694115825801);
INSERT INTO `notification` VALUES ('5134c6c3-229b-4cc4-ac5f-24af301f5393', 'Thông báo về việc tham gia bảo hiểm tai nạn (đợt bổ sung)', '<p class=\"ql-align-justify\">Thân gửi các bạn sinh viên,</p><p class=\"ql-align-justify\">&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: black;\">Xuất phát từ nhu cầu và quyền lợi sinh viên khi tham gia&nbsp;bảo&nbsp;hiểm&nbsp;tai&nbsp;nạn; Nhằm tạo điều kiện cho những sinh viên có nhu cầu tham gia bổ sung,&nbsp;</span>Phòng Công tác sinh viên&nbsp;thông&nbsp;báo&nbsp;đến sinh viên về việc triển khai&nbsp;Bảo&nbsp;hiểm&nbsp;tai&nbsp;nạn&nbsp;sinh viên năm học&nbsp;2023-2024&nbsp;(đợt bổ sung) như sau:</p><p class=\"ql-align-justify\">&nbsp;+&nbsp;<strong>Đối tượng:&nbsp;</strong><span style=\"color: black;\">Sinh viên Đại học chính quy các khóa&nbsp;</span>từ 2022&nbsp;trở về trước&nbsp;<span style=\"color: black;\">đang học&nbsp;tại&nbsp;trường chưa đăng ký tham gia&nbsp;bảo&nbsp;hiểm&nbsp;tai&nbsp;nạn&nbsp;năm học&nbsp;2023-2024.</span></p><p class=\"ql-align-justify\">&nbsp;&nbsp;+&nbsp;<strong>Thời gian đóng</strong>:&nbsp;từ 11/09&nbsp;– 21/09/2023</p><p class=\"ql-align-justify\"><strong>&nbsp;&nbsp;&nbsp;</strong>+&nbsp;<strong style=\"color: black;\">Mức thu:&nbsp;</strong><span style=\"color: black;\">60.000đ / 1 sinh viên / năm học.</span></p><p class=\"ql-align-justify\">&nbsp;+&nbsp;<strong>Hình thức tham gia</strong>:&nbsp;Sinh viên đóng trực tiếp&nbsp;tại&nbsp;Phòng Công tác sinh viên (Phòng G05-Nhà Thiên Lý)</p><p class=\"ql-align-justify\">	Bảo&nbsp;hiểm&nbsp;tai&nbsp;nạn&nbsp;được thực hiện theo tinh thần tự nguyện của sinh viên. Tuy nhiên nhà trường khuyến khích sinh viên tham gia&nbsp;bảo&nbsp;hiểm&nbsp;tai&nbsp;nạn, đặc biệt các trường hợp sau:</p><p class=\"ql-align-justify\">-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong><em>Sinh viên đang nội trú&nbsp;tại&nbsp;KTX trường và ngoại trú&nbsp;tại&nbsp;KTX khu B - ĐH Quốc Gia TP.HCM.</em></strong></p><p class=\"ql-align-justify\">-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong><em>Sinh viên có tham gia thực hành, thực tế, thực tập môn học, thực tập giáo trình, rèn nghề, các hoạt động thể thao.</em></strong></p><p>Trân trọng./</p>', b'0', 1694127079579, 1694127079579);
INSERT INTO `notification` VALUES ('7697a45f-c857-4d46-8bdf-c60536d484e9', 'V/v đăng ký đk online các hp còn chỗ của khóa 2023 trong HK1/2023-2024', '<p>Chào các em,</p><p><br></p><p>Khoa CNTT chuyển đến các em thông báo của PĐT v/v mở đăng ký online bổ sung các học phần còn chỗ của khóa 2023 trong HK1/2023-2024</p><p>Nội dung chi tiết trong link sau:</p><p><a href=\"https://dkmh.hcmuaf.edu.vn/#/home/listbaiviet/tb/page/1/baivietct/-8824388080248545739\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(17, 85, 204);\">https://dkmh.hcmuaf.edu.vn/#/home/listbaiviet/tb/page/1/baivietct/-8824388080248545739</a></p><p><br></p><p>Thân mến.</p>', b'0', 1694114887208, 1694114887208);
INSERT INTO `notification` VALUES ('770bdd49-bece-45dc-81cb-9e8090b077fb', 'Background cho ngày Bảo vệ Luận văn tốt nghiệp', '<p>Chào em,</p><p><br></p><p>Mai là ngày Bảo vệ Luận văn tốt nghiệp, do đó tôi sẽ gửi cho em ảnh background cho buổi bảo vệ này (xem file đính kèm). Em vui lòng thêm slide này vào bài thuyết trình (file powerpoint) của mình nhé.</p>', b'0', 1694108357909, 1694108357909);
INSERT INTO `notification` VALUES ('a5d11513-b872-4b2c-bee9-3283ce10d9b9', '[Thông báo] V/v nộp đề cương chi tiết KLTN trong HK1/2023-2024', '<p>Chào các em,</p><p><br></p><p>Khoa CNTT gửi đến các em thông báo về việc nộp đề cương chi tiết KLTN trong học kỳ 1 năm học 2023-3024</p><p><strong style=\"color: rgb(255, 0, 0);\">Thời gian&nbsp;nộp:&nbsp;từ ngày&nbsp;07/8/2023</strong><span style=\"color: rgb(255, 0, 0);\">&nbsp;đến ngày&nbsp;</span><strong style=\"color: rgb(255, 0, 0);\">09/8/2023</strong><span style=\"color: rgb(255, 0, 0);\">.</span></p><p><em>Chi tiết trong file đính kèm</em></p><p><br></p><p>Trân trọng</p><p><br></p>', b'0', 1694113739995, 1694113739995);
INSERT INTO `notification` VALUES ('a6c287d4-0626-40a4-979e-c69ee51e35a9', 'Thông báo về việc nộp đề cương khóa luận tốt nghiệp', '<p>Chào các em,</p><p><br></p><p>Khoa CNTT gửi đến các em thông báo về việc nộp đề cương chi tiết KLTN trong học kỳ 1 năm học 2023-3024</p><p><strong style=\"color: rgb(255, 0, 0);\">Thời gian&nbsp;nộp:&nbsp;từ ngày&nbsp;07/8/2023</strong><span style=\"color: rgb(255, 0, 0);\">&nbsp;đến ngày&nbsp;</span><strong style=\"color: rgb(255, 0, 0);\">09/8/2023</strong><span style=\"color: rgb(255, 0, 0);\">.</span></p><p><em>Chi tiết trong file đính kèm</em></p><p><br></p><p>Trân trọng</p>', b'0', 1693202303789, 1693202303789);
INSERT INTO `notification` VALUES ('e9c9a10a-1ee1-4c4c-985e-09fddd538671', 'Khảo sát nguyện vọng mở thêm chỗ các môn học trong HK1/2023-2024', '<p>Chào các em,</p><p><br></p><p>Hiện tại Khoa đang nhận khá nhiều yêu cầu mở thêm chỗ cho các môn học trong HK1/2023-2024.</p><p>Để thống kê số lượng sinh viên có nguyện vọng mở thêm, các em vui lòng điền vào phiếu khảo sát sau:</p><p><strong>Link khảo sát:&nbsp;</strong><a href=\"https://tinyurl.com/Khaosat-HK1-2023-2024\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(17, 85, 204);\"><strong>https://tinyurl.com/Khaosat-HK1-2023-2024</strong></a></p><p><strong>Thời gian thực hiện: đến 16h00 ngày 01/8/2023</strong></p><p>Kết quả khảo sát là căn cứ để Khoa lập kế hoạch mở thêm môn học, đề nghị sinh viên nghiêm túc thực hiện.</p><p>Nếu môn học được mở thêm sinh viên sẽ đăng ký online trong thời gian đăng ký môn học dành cho sinh viên toàn trường</p><p><strong>Lưu ý: sinh viên thực hiện khảo sát không có nghĩa là sinh viên đã đăng ký môn học thành công.</strong></p><p><br></p><p>Trân trọng</p>', b'0', 1694115943953, 1694115943953);
INSERT INTO `notification` VALUES ('f2052f80-a48d-4c5a-9397-6f210f872388', '[Thông báo] V/v bảo vệ chấm phản biện và bảo vệ KLTN HK2/2022-2023', '<p>Chào các em,</p><p><br></p><p>Khoa CNTT gửi đến các em danh sách giảng viên chấm phản biện đề tài KLTN được thực hiện trong HK2/2022-2023</p><p><em>(Chi tiết trong file đính kèm)</em></p><p><strong style=\"color: rgb(255, 0, 0);\">Sinh viên liên hệ với GVPB trong thời gian từ 21/8-31/8/2023</strong></p><p><strong style=\"color: rgb(255, 0, 0);\">Thời gian bảo vệ: 7h30 thứ 6 ngày 08/9/2023 tại Phòng họp KCNTT (Rạng Đông)</strong></p><p><br></p><p>Trân trọng</p>', b'0', 1694108436164, 1694108436164);
INSERT INTO `notification` VALUES ('fba6e308-bc31-4e71-9029-9e6801f44bbd', 'Thông báo A', '<p>Đây là <strong><em>thông báo A</em></strong></p>', b'1', 1693206636132, 1693206636132);

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
INSERT INTO `notification_attachment` VALUES ('079807d4-1295-4a39-ad1d-6ef1b3364590', '770bdd49-bece-45dc-81cb-9e8090b077fb', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694108351947-image.png?alt=media&token=79bbfc67-c1e5-40e3-bf9f-9c81943e9726', b'0', 1694108357909, 1694108357909);
INSERT INTO `notification_attachment` VALUES ('0c0bc8ee-cca4-4add-b7d7-adbf42534859', 'f2052f80-a48d-4c5a-9397-6f210f872388', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694108432124-DS%20KLTN_HK2%2022%2023_PB.pdf?alt=media&token=7e00d8b1-83c7-4f17-a57e-09a2a5f195b8', b'0', 1694108436164, 1694108436164);
INSERT INTO `notification_attachment` VALUES ('425402db-c9ea-49ac-8d61-0ad43a068bd9', 'a5d11513-b872-4b2c-bee9-3283ce10d9b9', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694113730242-DS%20KLTN_HK2%2022%2023_PB.pdf?alt=media&token=62c8f6de-4237-4333-aade-9fce9a5217c5', b'0', 1694113739996, 1694113739996);
INSERT INTO `notification_attachment` VALUES ('85152a1a-c3ab-4fca-97cc-016269ab29ee', '5134c6c3-229b-4cc4-ac5f-24af301f5393', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694127070537-image.png?alt=media&token=5c759889-a842-4875-b716-838820e35b6c', b'0', 1694127079581, 1694127079581);
INSERT INTO `notification_attachment` VALUES ('933f228c-0aff-42fc-a75c-07cbc05f66d3', '39870d33-044f-4bfc-9a72-bc47842dfc74', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694115777360-image.png?alt=media&token=5de83e7d-b8a8-485f-b4dc-859c5181c761', b'0', 1694115825801, 1694115825801);
INSERT INTO `notification_attachment` VALUES ('bda30814-1f53-409a-9fd5-a247a0d59b8f', 'e9c9a10a-1ee1-4c4c-985e-09fddd538671', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694115940321-DS%20KLTN_HK2%2022%2023_PB.pdf?alt=media&token=1726e162-54f0-4697-9d07-d0a6bab5f806', b'0', 1694115943953, 1694115943953);
INSERT INTO `notification_attachment` VALUES ('beb9f6e1-f815-4863-bd2b-e939da47ddd7', '089e0989-b71e-4169-bd67-a02b82bbbb59', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694125450630-image.png?alt=media&token=7f5b13e5-a940-4737-905f-a0aacffbdc4c', b'0', 1694125455770, 1694125455770);
INSERT INTO `notification_attachment` VALUES ('bfd05ace-4e2b-4acf-86af-4567f92aef25', 'fba6e308-bc31-4e71-9029-9e6801f44bbd', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1693206632234-368171717_258084900521007_8064398003524157069_n.png?alt=media&token=97bc2a89-de63-41d6-90da-41556f13f4e2', b'0', 1693206636132, 1693206636132);
INSERT INTO `notification_attachment` VALUES ('cb63e895-f7e0-4ceb-a999-6fa348c87190', '7697a45f-c857-4d46-8bdf-c60536d484e9', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694114882083-image.png?alt=media&token=831885ad-4a21-4a37-b770-5383e73af548', b'0', 1694114887209, 1694114887209);

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
INSERT INTO `refresh_token` VALUES ('23b145c7-64c2-451a-90c7-49ce41451612', '94382753-88a7-4c56-87a1-f89a6ec29edb', '2023-09-23 00:00:00', 1694126421582, 1694126421582);
INSERT INTO `refresh_token` VALUES ('27720622-19e0-4b16-86f4-67f35dfaf651', 'cda92fcb-04fd-438b-a9f7-bf321b54197e', '2023-09-23 00:00:00', 1694127768121, 1694127768121);
INSERT INTO `refresh_token` VALUES ('2be46e67-dc9f-4ce1-9e62-999362c0545c', '07a09cd1-cca4-4e5b-af3e-ce3acec31249', '2023-09-22 00:00:00', 1694101329916, 1694101329916);
INSERT INTO `refresh_token` VALUES ('3426049a-a7f1-41ab-af42-efd5905e0a61', '9dfa3f6b-d9db-4edd-b203-3f503f86cee7', '2023-09-23 00:00:00', 1694110693611, 1694110693611);
INSERT INTO `refresh_token` VALUES ('4f52a996-8405-413b-a10f-f7971204624d', '55d03e5a-1a41-478d-bca5-7e5da4ddb73d', '2023-09-23 00:00:00', 1694115100053, 1694115100053);
INSERT INTO `refresh_token` VALUES ('5957a809-975a-457d-9e03-c63ab8333e8d', 'b345b277-74e0-45af-a14e-d1dbd62a7d5f', '2023-09-23 00:00:00', 1694112869962, 1694112869962);
INSERT INTO `refresh_token` VALUES ('5b4680d5-02ed-4575-9d80-9ff0ce0c16f1', 'cf5ad10c-3077-4883-93c9-b46dd3f35c12', '2023-09-23 00:00:00', 1694112919380, 1694112919380);
INSERT INTO `refresh_token` VALUES ('69f6fd31-0675-4f1e-b50c-eb2cd07a29a1', '903bd855-f01e-4cb4-b0ef-99f811e68e1e', '2023-09-23 00:00:00', 1694116233726, 1694116233726);
INSERT INTO `refresh_token` VALUES ('75028748-528a-4b4a-b538-77351f0b1ce6', 'ee5fcb0f-a9dc-4b19-b600-ff76f9ea19b7', '2023-09-23 00:00:00', 1694127324980, 1694127324980);
INSERT INTO `refresh_token` VALUES ('7a6925c1-ee0f-4788-af94-7c12966777d8', '113fbbed-893c-4acd-9e3c-b0b44e662a1a', '2023-09-23 00:00:00', 1694110676398, 1694110676398);
INSERT INTO `refresh_token` VALUES ('7a6e74d8-7d5a-4842-969d-3819ecf2439f', '9ef47ebf-6b39-4d60-86c7-cc56e284c4d6', '2023-09-23 00:00:00', 1694111544678, 1694111544678);
INSERT INTO `refresh_token` VALUES ('7a959c3c-9302-4ba3-a713-ee7241b47628', '6036d7d9-3e8a-48f3-9659-bc5629e8f65b', '2023-09-23 00:00:00', 1694116134572, 1694116134572);
INSERT INTO `refresh_token` VALUES ('7ad9653f-c5ab-4ebe-a35a-6cb4cecd762a', '536d42cf-1980-4679-9533-2be362efef9f', '2023-09-23 00:00:00', 1694125674054, 1694125674054);
INSERT INTO `refresh_token` VALUES ('7ed0fcfd-1114-4b50-9a4f-121deda8c50e', 'd195b534-33df-4238-8b20-d7d81892da25', '2023-09-23 00:00:00', 1694126279553, 1694126279553);
INSERT INTO `refresh_token` VALUES ('857a1af6-1e31-4a66-a1de-dba5d63c9a87', '6b7b17ee-8bed-411e-b3e0-e52bc822f76c', '2023-09-23 00:00:00', 1694115416053, 1694115416053);
INSERT INTO `refresh_token` VALUES ('96f7d7f3-6f74-4a58-b7a0-b091dc244d2d', '1d84f16e-f21e-43dd-8b21-61c357142d1d', '2023-09-23 00:00:00', 1694115246355, 1694115246355);
INSERT INTO `refresh_token` VALUES ('ab6c86ea-510c-4be7-97b1-e11f52878386', '0f7d2151-210e-4720-9baf-e27540dc0178', '2023-09-23 00:00:00', 1694125755216, 1694125755216);
INSERT INTO `refresh_token` VALUES ('c6a2c637-42b2-4cdc-91b1-7beff35c569c', 'da163727-97e4-4cff-9137-bddb030dab09', '2023-09-23 00:00:00', 1694110039226, 1694110039226);
INSERT INTO `refresh_token` VALUES ('d07064fc-c2b2-419f-a8c9-033e55571ac6', '6b498ec1-4390-4898-b344-8d73b5ad7980', '2023-09-23 00:00:00', 1694127237098, 1694127237098);
INSERT INTO `refresh_token` VALUES ('d92bb86f-6b3e-431e-94c0-991200f672a0', 'd28b3dc5-0fe4-4574-ad61-0786e1d49435', '2023-09-23 00:00:00', 1694115208418, 1694115208418);
INSERT INTO `refresh_token` VALUES ('f171f3b4-1750-4264-83be-74d007d06852', '0001', '2023-09-22 00:00:00', 1694097629912, 1694097629912);

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
INSERT INTO `reviewer` VALUES ('249dacd2-04cb-4836-9963-d44309be95ad', '446ba792-5747-4e36-9000-1845b4e046c3', '9dfa3f6b-d9db-4edd-b203-3f503f86cee7', 10, 10, 10, 10, 10, 10, 10, 10, '10', '10', '10', 'Nội dung', 'Kết quả', 'Thiếu sót', 1, b'0', 1694127598060, 1694127598060);
INSERT INTO `reviewer` VALUES ('4e642981-8d18-4dce-8a7b-f9f07a8bebb1', '7f08b37b-4a3f-4509-a0ac-ba8bcb1bfb4c', '94382753-88a7-4c56-87a1-f89a6ec29edb', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, b'0', 1694115554791, 1694115554791);
INSERT INTO `reviewer` VALUES ('5e0c41dd-c1b9-460d-816e-545bfb515869', '63893d42-920f-4240-bce1-8ef3584522ab', '1d84f16e-f21e-43dd-8b21-61c357142d1d', 10, 10, 10, 10, 10, 10, 10, 10, '10', '10', '10', 'Ưu điểm', 'Kết quả', 'Thiếu sót', 1, b'0', 1694126040403, 1694126040403);

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
INSERT INTO `reviewer_question` VALUES ('39eae6cf-2b6a-43c1-9c32-d2b2b98f5e31', '249dacd2-04cb-4836-9963-d44309be95ad', 'Câu hỏi 1', b'0', 1694127671673, 1694127671673);
INSERT INTO `reviewer_question` VALUES ('68fc8fe4-f1a2-4851-b0dd-eb2592665ca9', '249dacd2-04cb-4836-9963-d44309be95ad', 'Câu hỏi 1', b'0', 1694127671672, 1694127671672);
INSERT INTO `reviewer_question` VALUES ('7745eb39-85fa-487a-afd4-b7067150fda2', '5e0c41dd-c1b9-460d-816e-545bfb515869', 'Câu hỏi 1', b'0', 1694126155955, 1694126155955);
INSERT INTO `reviewer_question` VALUES ('cc5b5b05-4f76-44db-a489-8889c5cb524c', '5e0c41dd-c1b9-460d-816e-545bfb515869', 'Câu hỏi 1', b'0', 1694126155953, 1694126155953);

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
INSERT INTO `reviewer_score` VALUES ('05677e1e-f9b9-4901-9115-fccd7b90aab4', '249dacd2-04cb-4836-9963-d44309be95ad', 'ee5fcb0f-a9dc-4b19-b600-ff76f9ea19b7', 7, b'0', 1694127671611, 1694127671611);
INSERT INTO `reviewer_score` VALUES ('088ff1c8-64be-4f19-8c72-d6b37359d944', '5e0c41dd-c1b9-460d-816e-545bfb515869', '0f7d2151-210e-4720-9baf-e27540dc0178', 7, b'0', 1694126155862, 1694126155862);
INSERT INTO `reviewer_score` VALUES ('16b23653-706a-46ce-8e7e-63b855be2e52', '5e0c41dd-c1b9-460d-816e-545bfb515869', '536d42cf-1980-4679-9533-2be362efef9f', 7, b'0', 1694126155862, 1694126155862);
INSERT INTO `reviewer_score` VALUES ('8b4189d7-01a3-4998-b475-69cc289fb291', '249dacd2-04cb-4836-9963-d44309be95ad', '6b498ec1-4390-4898-b344-8d73b5ad7980', 7, b'0', 1694127671611, 1694127671611);

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
INSERT INTO `role_user` VALUES ('052a70cd-1245-44cc-aeb8-f07aafaec75c', 'd28b3dc5-0fe4-4574-ad61-0786e1d49435', 4, b'0', 1694115055531, 1694115055531);
INSERT INTO `role_user` VALUES ('076c160e-f320-444e-9927-04fc129c17ac', 'fb86a739-fa4b-41b4-9a7e-ec0f622dc9e9', 4, b'0', 1694106902110, 1694106902110);
INSERT INTO `role_user` VALUES ('085f60be-214f-43db-a19a-d74cfdeb64cc', '5fd0dc1c-749a-45ec-a7f1-ed4e6531644c', 4, b'0', 1694103645833, 1694103645833);
INSERT INTO `role_user` VALUES ('08d49b83-ea1d-452e-880f-3cb0ecd15062', '7fc22c12-fa54-4986-b44e-3365be36f800', 4, b'0', 1694104334605, 1694104334605);
INSERT INTO `role_user` VALUES ('0c638820-aed0-471f-8688-cc03a9440c78', '773ed4fc-4bed-44f5-8eda-4830518b95d7', 4, b'0', 1694100602511, 1694100602511);
INSERT INTO `role_user` VALUES ('18f2365e-f9fa-47ff-b8b3-da9d7404f726', 'e19d57ff-5089-49ad-9be2-f4e8d1440903', 4, b'0', 1694103194060, 1694103194060);
INSERT INTO `role_user` VALUES ('1a808331-18a1-46a8-b267-faf8efcd09fe', '0662a9cc-1ece-4a49-aec3-4ab8a6147bf7', 4, b'0', 1694104260575, 1694104260575);
INSERT INTO `role_user` VALUES ('206918ba-71f9-4bc2-89f0-15fe3c798afe', '6199e140-7828-4941-855c-78e74eb0c41c', 4, b'0', 1694107481486, 1694107481486);
INSERT INTO `role_user` VALUES ('270caf71-7c23-4d3c-b84a-ce3b78e5e387', '8cfb4971-b8a2-4741-b0f3-6b7a654f09da', 4, b'0', 1694105617013, 1694105617013);
INSERT INTO `role_user` VALUES ('2de3bf25-e989-40db-97a1-87a97ec3a1f0', '55d03e5a-1a41-478d-bca5-7e5da4ddb73d', 4, b'0', 1694114994413, 1694114994413);
INSERT INTO `role_user` VALUES ('33ea8353-bc60-4492-ae35-82514118b13d', 'bccdc228-cb42-4c33-bc38-dfeff8f6dee3', 4, b'0', 1694103253984, 1694103253984);
INSERT INTO `role_user` VALUES ('3859a8e0-d9cc-4e96-8909-98193fb85f64', '074937a2-0a68-4441-b0b8-785cea801fdc', 4, b'0', 1694106979389, 1694106979389);
INSERT INTO `role_user` VALUES ('3986b1b5-7dfb-497c-b08e-8fd4cb3ccdfa', '4d4f66fb-f84c-418f-9cd4-b43b4c46a0b7', 4, b'0', 1694098769254, 1694098769254);
INSERT INTO `role_user` VALUES ('4089004b-a532-4bae-8a1c-b20bc498fa8e', 'b345b277-74e0-45af-a14e-d1dbd62a7d5f', 4, b'0', 1694112741484, 1694112741485);
INSERT INTO `role_user` VALUES ('41ab03f8-67fc-4e32-aaf2-407ab1ba3290', 'fd65eb74-4db4-4c6a-9c89-04bf90360914', 4, b'0', 1694105227548, 1694105227548);
INSERT INTO `role_user` VALUES ('446e499b-187e-4795-8bf1-150e0686d44c', '9dfa3f6b-d9db-4edd-b203-3f503f86cee7', 5, b'0', 1694098221684, 1694098221684);
INSERT INTO `role_user` VALUES ('462df8a8-7931-4209-9928-9b93e266827d', '900af0a8-464e-408c-b7e1-9cef9ee64902', 4, b'0', 1694106273726, 1694106273726);
INSERT INTO `role_user` VALUES ('49f13c38-7be5-4bc7-b372-54ee26cbf9a9', '1f3896cd-3dba-4804-917e-ef8adad6c4e8', 4, b'0', 1694099722865, 1694099722865);
INSERT INTO `role_user` VALUES ('49f9bbd6-2d1e-48c3-ac3f-a0315aace274', '699f6ac7-93f5-4b48-b152-deddc78332dd', 4, b'0', 1694103967359, 1694103967359);
INSERT INTO `role_user` VALUES ('4b50e33e-9781-45d5-8f13-83c11c1500ba', 'cb918cee-0f79-4abd-b78e-915971e63b8e', 4, b'0', 1694105700968, 1694105700968);
INSERT INTO `role_user` VALUES ('4d049742-a631-4038-8a3f-ee3d657a3288', '431bba65-42e3-4be5-b201-bce3f31b8547', 4, b'0', 1694103558759, 1694103558759);
INSERT INTO `role_user` VALUES ('5130aa7a-171b-4475-8880-fea9ba950e68', '3191b1fb-1378-4b9a-bfd1-9cf7db7a0b6f', 4, b'0', 1694106661709, 1694106661709);
INSERT INTO `role_user` VALUES ('645cecfa-4870-4163-982e-d1fed567870d', '732a8744-6a63-4d1f-94c3-363129a27823', 4, b'0', 1694104794776, 1694104794776);
INSERT INTO `role_user` VALUES ('65361d4c-77fb-46ac-b285-1492083ddaac', '1d84f16e-f21e-43dd-8b21-61c357142d1d', 5, b'0', 1694099387978, 1694099387978);
INSERT INTO `role_user` VALUES ('66963333-977f-48c5-870e-c418939bb1e2', '6036d7d9-3e8a-48f3-9659-bc5629e8f65b', 4, b'0', 1694116030287, 1694116030287);
INSERT INTO `role_user` VALUES ('66e78bb2-7c83-45d1-8759-ddcbbf60fbca', '59593072-4fbd-437c-af92-38a40556df66', 4, b'0', 1694102354208, 1694102354208);
INSERT INTO `role_user` VALUES ('6f6aa15f-b51e-4886-8f09-1989fd820eaa', '39e7cf29-b50e-4de2-8601-3bb004221074', 4, b'0', 1694113811429, 1694113811429);
INSERT INTO `role_user` VALUES ('7a6ed77d-4055-4686-8fac-4b4c85de4f89', '9ef47ebf-6b39-4d60-86c7-cc56e284c4d6', 5, b'0', 1694107183358, 1694107183358);
INSERT INTO `role_user` VALUES ('7d7201fc-3903-416d-97f4-2893e4329442', '9cdca43b-6d5c-46ad-a2bf-01b0b879f20d', 4, b'0', 1694101887927, 1694101887927);
INSERT INTO `role_user` VALUES ('80611763-ea76-4471-97f3-20628d7436d4', 'd880f951-8bfb-4867-a438-2a556398a166', 4, b'0', 1694100041199, 1694100041199);
INSERT INTO `role_user` VALUES ('80c23912-a0fb-4bdd-94ec-f93bb3462d45', 'ceb3533b-931a-429b-828a-3b3c4152463c', 4, b'0', 1694101308606, 1694101308606);
INSERT INTO `role_user` VALUES ('88763a97-14f6-41bc-a3e3-fd27badfe7bd', '57c6ff2d-1732-4d2e-a67d-32dbe010b7e9', 4, b'0', 1694105045732, 1694105045732);
INSERT INTO `role_user` VALUES ('8c009dcd-c324-40bd-809c-573c883528b4', 'cf5ad10c-3077-4883-93c9-b46dd3f35c12', 4, b'0', 1694112788479, 1694112788479);
INSERT INTO `role_user` VALUES ('90be5548-009c-4a99-baab-175d356184cf', '6ea99057-f64d-406b-a126-287f3e31954c', 4, b'0', 1694101514582, 1694101514582);
INSERT INTO `role_user` VALUES ('994ba2a1-4d9d-4cb8-a2ba-76180feea571', 'f97ed062-bec3-4b37-93b8-f3d521b1c931', 4, b'0', 1694105983859, 1694105983859);
INSERT INTO `role_user` VALUES ('99913380-2948-4e78-9515-023f2245a293', '78f769c8-425f-4438-ba59-0ed7fb6c6f79', 4, b'0', 1694106209391, 1694106209391);
INSERT INTO `role_user` VALUES ('9b046117-c06e-4680-9419-67e2f86a5e9c', 'bc1adb23-9016-4de7-b72c-d1ec0ede7e3b', 4, b'0', 1694099032014, 1694099032014);
INSERT INTO `role_user` VALUES ('9c3b542e-4096-439d-aafe-d0fa66277014', '0043eeef-d7e6-45f1-8102-c3ce8ab03ac5', 4, b'0', 1694098089727, 1694098089727);
INSERT INTO `role_user` VALUES ('9ce990ed-e4f8-46ed-a2dc-181fc57650c9', '6753347b-4138-4ccc-bd0e-6865befbafba', 4, b'0', 1694098646041, 1694098646041);
INSERT INTO `role_user` VALUES ('9ef6b6dc-48cd-4f01-8520-22a56f07ad31', '6aa7e509-a475-4bb1-971f-0d523c63ccdd', 4, b'0', 1694107400218, 1694107400218);
INSERT INTO `role_user` VALUES ('a086db66-a6a9-4f12-9719-32332617dee1', '2b86e64f-fe12-490b-b3ed-d9dbf317aa5e', 4, b'0', 1694102951094, 1694102951094);
INSERT INTO `role_user` VALUES ('a68489fb-800b-40a9-8a6e-59f692ffbe84', '113fbbed-893c-4acd-9e3c-b0b44e662a1a', 4, b'0', 1694110014842, 1694110014842);
INSERT INTO `role_user` VALUES ('a83b0a32-1680-4a42-aa84-6c9747e20663', 'e2e7ade3-4747-4013-8c51-0ff1f2d2b0ad', 4, b'0', 1694113874797, 1694113874797);
INSERT INTO `role_user` VALUES ('a8416a0d-798f-409c-ba50-4e731fa72e0f', '94382753-88a7-4c56-87a1-f89a6ec29edb', 5, b'0', 1694104431180, 1694104431180);
INSERT INTO `role_user` VALUES ('b0155703-3181-4090-a695-bc24bbb88869', '0001', 1, b'0', 1694115689209, 1694115689209);
INSERT INTO `role_user` VALUES ('b5333d54-0d8d-4942-a5a2-496c737b127a', '0f7d2151-210e-4720-9baf-e27540dc0178', 4, b'0', 1694125603271, 1694125603271);
INSERT INTO `role_user` VALUES ('b7dfda3c-fd60-4de1-9be9-27039019b746', '6d6e29c9-f4d0-4fdb-8dc9-0eb58ce91158', 4, b'0', 1694105909052, 1694105909052);
INSERT INTO `role_user` VALUES ('b8f15b29-88c7-493f-988e-ad2e78904e30', 'ce7a0609-18af-46da-b3c8-d96056445ec5', 4, b'0', 1694104656432, 1694104656432);
INSERT INTO `role_user` VALUES ('ba499245-610c-46fa-9ac8-b8cfd94de1fe', 'cda92fcb-04fd-438b-a9f7-bf321b54197e', 5, b'0', 1694100790013, 1694100790013);
INSERT INTO `role_user` VALUES ('bc973b35-dbc4-437c-91a4-da5b720b138c', '28aff2a7-3b8c-409e-a1e0-9fc04134993e', 4, b'0', 1694100149195, 1694100149195);
INSERT INTO `role_user` VALUES ('bd2aff9c-342c-4e29-a737-5046ad67b24d', 'da163727-97e4-4cff-9137-bddb030dab09', 4, b'0', 1694109973659, 1694109973659);
INSERT INTO `role_user` VALUES ('c1b645db-6556-4b0a-ab36-a6be64cee6fc', 'ea198a7a-fb0b-4a35-a465-60aff2f834a1', 4, b'0', 1694099167351, 1694099167351);
INSERT INTO `role_user` VALUES ('cafe8f90-51cb-4222-98a3-935be323401d', '536d42cf-1980-4679-9533-2be362efef9f', 4, b'0', 1694125547208, 1694125547208);
INSERT INTO `role_user` VALUES ('cced5b2c-751e-45a9-a59b-aa11904345c9', '07a09cd1-cca4-4e5b-af3e-ce3acec31249', 4, b'0', 1694100517913, 1694100517913);
INSERT INTO `role_user` VALUES ('ce909ec0-ba8e-4837-9561-5256db956068', '0d257149-8b65-4727-bec5-9ec8b4c2e596', 5, b'0', 1694105409864, 1694105409864);
INSERT INTO `role_user` VALUES ('d03a6590-ccda-4939-8be6-d1b8e0bcde78', '14129268-4cb8-46dd-aaf4-aa0d40f901c6', 4, b'0', 1694099634634, 1694099634634);
INSERT INTO `role_user` VALUES ('d245ede5-95af-467b-8c01-c19e2d9f271e', 'db8cd058-19d5-4bb8-84cd-8f8927aed99b', 4, b'0', 1694101799235, 1694101799235);
INSERT INTO `role_user` VALUES ('d43d6eb3-e723-41b7-a46c-3159a3789f88', 'b825fdb5-318e-4a0e-8c35-d8d49d40ec22', 4, b'0', 1694106588123, 1694106588123);
INSERT INTO `role_user` VALUES ('de086668-6f17-4ec6-8753-2e6ca27a9171', '9eb9e30f-128d-487d-858c-b06bb10d9d81', 4, b'0', 1694103870820, 1694103870820);
INSERT INTO `role_user` VALUES ('e16e967c-52a6-4f13-bf73-64a83bd7e1d9', '903bd855-f01e-4cb4-b0ef-99f811e68e1e', 4, b'0', 1694116072487, 1694116072487);
INSERT INTO `role_user` VALUES ('e2fc48f9-cecd-4d86-98b6-3900a7b7af93', '94366443-58c3-479c-bb11-9bdfd7e540b1', 4, b'0', 1694104959047, 1694104959047);
INSERT INTO `role_user` VALUES ('eb01c468-6cc2-434b-84b1-7cbd2c36f6ae', '3fad7e3d-7422-46f7-8c9a-5a36efa0fa0c', 4, b'0', 1694102486866, 1694102486866);
INSERT INTO `role_user` VALUES ('ed20e3ef-f2a3-4df0-aad8-70b90e38ee61', 'ee5fcb0f-a9dc-4b19-b600-ff76f9ea19b7', 4, b'0', 1694127208427, 1694127208427);
INSERT INTO `role_user` VALUES ('ee6349a9-0051-4baa-bd15-93cb78f1662f', 'd195b534-33df-4238-8b20-d7d81892da25', 5, b'0', 1694102566491, 1694102566491);
INSERT INTO `role_user` VALUES ('ef4589a7-f5fc-4c3f-b5d4-769f552031c2', '6b7b17ee-8bed-411e-b3e0-e52bc822f76c', 5, b'0', 1694102017297, 1694102017297);
INSERT INTO `role_user` VALUES ('fa122bba-8869-4132-a4cc-b582b49ab065', 'c77baa26-4ed6-4cad-8b0d-4977e4604592', 4, b'0', 1694105311320, 1694105311320);
INSERT INTO `role_user` VALUES ('fb9dd9ee-88d5-4ff5-8991-6b108907a175', '28e4ecb6-500b-459a-b2b5-d87c3df92ca7', 4, b'0', 1694097860636, 1694097860636);
INSERT INTO `role_user` VALUES ('fdae2401-6977-40c0-b4b2-da32b2a2d787', '6b498ec1-4390-4898-b344-8d73b5ad7980', 4, b'0', 1694127158255, 1694127158255);
INSERT INTO `role_user` VALUES ('fe38576c-4956-4eb7-93c5-139f9c2e6ed6', '222d9c28-0ca5-40b1-8074-ffda86f65668', 4, b'0', 1694102855979, 1694102855979);

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
INSERT INTO `student` VALUES ('0cc13c20-59ce-4152-8419-8a9540461cfa', '431bba65-42e3-4be5-b201-bce3f31b8547', 'DH16DT');
INSERT INTO `student` VALUES ('0d463efb-545c-44c7-9f8a-324b4ff6e58e', '074937a2-0a68-4441-b0b8-785cea801fdc', 'DH14DT');
INSERT INTO `student` VALUES ('0e886973-cfc5-4045-8112-38ef80c9c3e7', '9cdca43b-6d5c-46ad-a2bf-01b0b879f20d', 'DH17DT');
INSERT INTO `student` VALUES ('1002ffaa-0066-45dd-be9e-8a74f0373e03', 'da163727-97e4-4cff-9137-bddb030dab09', 'DH19DT');
INSERT INTO `student` VALUES ('107c5b70-69ce-4190-a904-5501e9b49921', 'ee5fcb0f-a9dc-4b19-b600-ff76f9ea19b7', 'DH18DT');
INSERT INTO `student` VALUES ('1598a5ef-d4ab-4645-808a-30d712fd024c', '222d9c28-0ca5-40b1-8074-ffda86f65668', 'DH16DT');
INSERT INTO `student` VALUES ('1fa8892d-5dd7-47ae-8dfb-bcad28f1fc5b', '1f3896cd-3dba-4804-917e-ef8adad6c4e8', 'DH17DT');
INSERT INTO `student` VALUES ('24752986-67ba-480e-a399-67167f27a5f4', '3191b1fb-1378-4b9a-bfd1-9cf7db7a0b6f', 'DH15DT');
INSERT INTO `student` VALUES ('24a14fbc-8cfa-4496-b229-f2ddf3774db7', 'db8cd058-19d5-4bb8-84cd-8f8927aed99b', 'DH17DT');
INSERT INTO `student` VALUES ('253912b9-43c7-445c-8da1-961e93dea24e', '6d6e29c9-f4d0-4fdb-8dc9-0eb58ce91158', 'DH16DT');
INSERT INTO `student` VALUES ('26ef5ea2-e109-49f7-bfc9-e270fe312f3c', '28e4ecb6-500b-459a-b2b5-d87c3df92ca7', 'DH17DT');
INSERT INTO `student` VALUES ('29273355-2d6c-4917-97ca-48cf470305a9', '8cfb4971-b8a2-4741-b0f3-6b7a654f09da', 'DH16DT');
INSERT INTO `student` VALUES ('2e296380-a0d9-41ba-94b8-7e872cc54f8d', 'bc1adb23-9016-4de7-b72c-d1ec0ede7e3b', 'DH17DT');
INSERT INTO `student` VALUES ('34aa822e-c901-4f73-9736-eaee0f79060c', '0662a9cc-1ece-4a49-aec3-4ab8a6147bf7', 'DH14DT');
INSERT INTO `student` VALUES ('47464ab0-a982-4c36-8bc0-2f3cb2191a6c', 'd880f951-8bfb-4867-a438-2a556398a166', 'DH17DT');
INSERT INTO `student` VALUES ('499761c2-c7db-481c-a496-7e779404895a', 'ceb3533b-931a-429b-828a-3b3c4152463c', 'DH17DT');
INSERT INTO `student` VALUES ('4fda0cab-3134-4015-86a1-e7b054087da1', 'b345b277-74e0-45af-a14e-d1dbd62a7d5f', 'DH19DT');
INSERT INTO `student` VALUES ('583abd9d-e8a0-4782-85de-b74bd7a60305', 'ea198a7a-fb0b-4a35-a465-60aff2f834a1', 'DH17DT');
INSERT INTO `student` VALUES ('65c956c8-6549-49d3-8583-24ed27b4b8ba', 'b825fdb5-318e-4a0e-8c35-d8d49d40ec22', 'DH15DT');
INSERT INTO `student` VALUES ('6c961748-cf2e-4c13-a333-4ed7149facad', '57c6ff2d-1732-4d2e-a67d-32dbe010b7e9', 'DH14DT');
INSERT INTO `student` VALUES ('6cab9fd8-b0fd-406c-a43b-31143a331c37', 'c77baa26-4ed6-4cad-8b0d-4977e4604592', 'DH14DT');
INSERT INTO `student` VALUES ('73dc960b-3070-4df8-9445-cd55380c22af', '6b498ec1-4390-4898-b344-8d73b5ad7980', 'DH18DT');
INSERT INTO `student` VALUES ('73f82a7a-e4b4-4780-b547-0064c7505177', '732a8744-6a63-4d1f-94c3-363129a27823', 'DH13DT');
INSERT INTO `student` VALUES ('77021eb7-af71-4d59-96dd-660cc31a44e3', '773ed4fc-4bed-44f5-8eda-4830518b95d7', 'DH17DT');
INSERT INTO `student` VALUES ('773a4d6a-5301-4692-a6e3-4981ebd381f4', '55d03e5a-1a41-478d-bca5-7e5da4ddb73d', 'DH19DT');
INSERT INTO `student` VALUES ('7b6efac1-fd16-4717-be69-0b54e91186da', 'e19d57ff-5089-49ad-9be2-f4e8d1440903', 'DH16DT');
INSERT INTO `student` VALUES ('7c1bdb7c-6a27-49ea-8b36-b7d46595d177', '6753347b-4138-4ccc-bd0e-6865befbafba', 'DH17DT');
INSERT INTO `student` VALUES ('7f9c56b1-e9f1-4c87-9558-2fbd0185e784', '94366443-58c3-479c-bb11-9bdfd7e540b1', 'DH14DT');
INSERT INTO `student` VALUES ('80246f34-2652-4f25-ac78-faf2f9480165', 'd28b3dc5-0fe4-4574-ad61-0786e1d49435', 'DH19DT');
INSERT INTO `student` VALUES ('867eaa72-e699-4589-838d-c1683a1fb2b2', '6036d7d9-3e8a-48f3-9659-bc5629e8f65b', 'DH19DT');
INSERT INTO `student` VALUES ('894a1622-1f7b-4708-b413-52a99effadba', '0f7d2151-210e-4720-9baf-e27540dc0178', 'DH18DT');
INSERT INTO `student` VALUES ('8ca4d68f-a33a-418b-802e-daadc1c828a1', 'e2e7ade3-4747-4013-8c51-0ff1f2d2b0ad', 'DH19DT');
INSERT INTO `student` VALUES ('9338f6d1-6b7a-481e-9a4b-6b161129ad51', '78f769c8-425f-4438-ba59-0ed7fb6c6f79', 'DH16DT');
INSERT INTO `student` VALUES ('9a3ccdc5-c786-49a5-8707-76ffa1079083', '59593072-4fbd-437c-af92-38a40556df66', 'DH14DT');
INSERT INTO `student` VALUES ('9e692ce7-3d7c-469a-8fad-1d85b872c22c', '2b86e64f-fe12-490b-b3ed-d9dbf317aa5e', 'DH16DT');
INSERT INTO `student` VALUES ('a2a38481-d20d-47e8-8dbc-cb1f7a33ee02', '900af0a8-464e-408c-b7e1-9cef9ee64902', 'DH16DT');
INSERT INTO `student` VALUES ('a3306ea8-15ba-4709-a6c4-92dc33fe607d', '5fd0dc1c-749a-45ec-a7f1-ed4e6531644c', 'DH16DT');
INSERT INTO `student` VALUES ('a537edcb-d399-43d5-be40-2ff1506b996d', '4d4f66fb-f84c-418f-9cd4-b43b4c46a0b7', 'DH17DT');
INSERT INTO `student` VALUES ('a5b8c24c-7577-4fc3-81a9-a6189f90dde6', '903bd855-f01e-4cb4-b0ef-99f811e68e1e', 'DH19DT');
INSERT INTO `student` VALUES ('ac80d7ab-acf1-40a3-add6-47e2111cf1b9', '14129268-4cb8-46dd-aaf4-aa0d40f901c6', 'DH17DT');
INSERT INTO `student` VALUES ('acfefd0d-f5cc-467b-87ca-d398a196fe5e', '536d42cf-1980-4679-9533-2be362efef9f', 'DH18DT');
INSERT INTO `student` VALUES ('b2f0d2d7-f130-4a36-81f8-efe4cbb57c85', 'f97ed062-bec3-4b37-93b8-f3d521b1c931', 'DH16DT');
INSERT INTO `student` VALUES ('b5058b8f-cf5e-47a5-9ab1-f717b31e8b10', 'fb86a739-fa4b-41b4-9a7e-ec0f622dc9e9', 'DH14DT');
INSERT INTO `student` VALUES ('b8a1e4be-be46-4fc3-a57d-d4fba43cb95f', '07a09cd1-cca4-4e5b-af3e-ce3acec31249', 'DH17DT');
INSERT INTO `student` VALUES ('c22d2c0d-4a0d-4abf-99ad-f17e7a5bd178', '6ea99057-f64d-406b-a126-287f3e31954c', 'DH17DT');
INSERT INTO `student` VALUES ('c6609d82-49ea-4a4d-899b-8bd849cdfa98', '6199e140-7828-4941-855c-78e74eb0c41c', 'DH16DT');
INSERT INTO `student` VALUES ('cbbef687-cbef-4dac-853c-bfa002d4f11b', 'ce7a0609-18af-46da-b3c8-d96056445ec5', 'DH13DT');
INSERT INTO `student` VALUES ('ce833134-5e2f-45ef-808d-04763c7b2dc5', '3fad7e3d-7422-46f7-8c9a-5a36efa0fa0c', 'DH15Dt');
INSERT INTO `student` VALUES ('d6d977a0-87ff-4050-9c3f-22882a4de893', '7fc22c12-fa54-4986-b44e-3365be36f800', 'DH14DT');
INSERT INTO `student` VALUES ('d72f1f79-8994-4dea-bf6f-ffd0034dd538', '0043eeef-d7e6-45f1-8102-c3ce8ab03ac5', 'DH17DT');
INSERT INTO `student` VALUES ('d86a9b73-1b91-4791-abad-817b2bf0c057', '6aa7e509-a475-4bb1-971f-0d523c63ccdd', 'DH16DT');
INSERT INTO `student` VALUES ('db1afd43-6969-4cd1-8c61-a4bf0e61e9de', 'cb918cee-0f79-4abd-b78e-915971e63b8e', 'DH16DT');
INSERT INTO `student` VALUES ('db25fcbb-fab7-4e67-a8b3-5c7125360811', 'bccdc228-cb42-4c33-bc38-dfeff8f6dee3', 'DH16DT');
INSERT INTO `student` VALUES ('dbcf1a44-c0ed-4472-a5bd-44e73defc387', '28aff2a7-3b8c-409e-a1e0-9fc04134993e', 'DH17DT');
INSERT INTO `student` VALUES ('df39d1f9-4054-46bf-a27d-cc7872278071', '699f6ac7-93f5-4b48-b152-deddc78332dd', 'DH16DT');
INSERT INTO `student` VALUES ('df50a322-4766-4d46-9edc-66eb439a9a5e', '39e7cf29-b50e-4de2-8601-3bb004221074', 'DH17DT');
INSERT INTO `student` VALUES ('e2724347-a47f-4918-bfff-8af8aacd872e', '9eb9e30f-128d-487d-858c-b06bb10d9d81', 'DH16DT');
INSERT INTO `student` VALUES ('e9674bfa-0b96-474c-9dfd-b5a0f4e09f8e', 'fd65eb74-4db4-4c6a-9c89-04bf90360914', 'DH14DT');
INSERT INTO `student` VALUES ('f42dc1f8-95da-4cdb-91f0-e3ddf0e49db7', '113fbbed-893c-4acd-9e3c-b0b44e662a1a', 'DH19DT');
INSERT INTO `student` VALUES ('f76904a8-39aa-4d27-a012-58be6e5ee1e1', 'cf5ad10c-3077-4883-93c9-b46dd3f35c12', 'DH19DT');

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
INSERT INTO `thesis` VALUES ('02b0dd30-257d-4a00-9499-774481ff2f76', 'ĐỀ TÀI XÂY DỰNG ỨNG DỤNG ĐẶT VÀ GIAO ĐỒ ĂN', NULL, 2021, 2, 9, '0001', b'0', 1694099803362, 1694099803362);
INSERT INTO `thesis` VALUES ('2e0490ed-022f-4254-a2a1-9fd135c251e0', 'Nghiên cứu Mahout để ứng dụng vào đề xuất tour du lịch', NULL, 2021, 2, 9, '0001', b'0', 1694098409406, 1694098409406);
INSERT INTO `thesis` VALUES ('30fa1e20-fb78-4886-af1a-06e8c14b4702', 'XÂY DỰNG ỨNG DỤNG MẠNG XÃ HỘI DÀNH CHO THÚ CƯNG', NULL, 2021, 2, 9, '0001', b'0', 1694099488536, 1694099488536);
INSERT INTO `thesis` VALUES ('33a76904-09bd-4a9b-82ff-296e684e70db', 'XÂY DỰNG ỨNG DỤNG HỌC TIẾNG ANH ONLINE QUA WEB VÀ APP', NULL, 2020, 2, 9, '0001', b'0', 1694106392398, 1694106392398);
INSERT INTO `thesis` VALUES ('3dac73ee-c43a-4481-9740-fa04e1c9c169', ' XÂY DỰNG HỆ THỐNG BÁN HÀNG VÀ QUẢN LÝ CỬA HÀNG DỰA TRÊN CÔNG NGHỆ SPRING, RESTFUL EBSERVICE, BOOTSTRAP, ANGULARJS, HTML5, CSS, MYSQL', NULL, 2017, 2, 9, '0001', b'0', 1694104869333, 1694104869333);
INSERT INTO `thesis` VALUES ('3f63290c-2338-4e66-854d-ded759f085dd', ' NGHIÊN CỨU ỨNG DỤNG OPENCV ĐỂ NHẬN DẠNG VÀ HỖ TRỢ GIẢI TOÁN', NULL, 2020, 2, 9, '0001', b'0', 1694104098178, 1694104098178);
INSERT INTO `thesis` VALUES ('3fc76141-d7c4-4bd8-96b3-f13374c60398', 'XÂY DỰNG WEBSITE TÌM PHÒNG TRỌ ONLINE SỬ DỤNG SPRING BOOT, REACTJS', NULL, 2021, 2, 9, '0001', b'0', 1694102086513, 1694102086513);
INSERT INTO `thesis` VALUES ('446ba792-5747-4e36-9000-1845b4e046c3', 'Website bán hàng điện tử', '<p>Mô tả đề cương</p>', 2023, 1, 9, '6b498ec1-4390-4898-b344-8d73b5ad7980', b'0', 1694127310032, 1694127310032);
INSERT INTO `thesis` VALUES ('5e58be4b-9a73-4999-801d-6429fe5feb8c', 'XÂY DỰNG ỨNG DỤNG TRÊN ĐIỆN THOẠI ĐỂ GIÁM SÁT TỰ ĐỘNG VIỆC TRỒNG RAU THỦY CANH TRONG CÁC HỘ GIA ĐÌNH', NULL, 2020, 1, 9, '0001', b'0', 1694103085163, 1694103085163);
INSERT INTO `thesis` VALUES ('63893d42-920f-4240-bce1-8ef3584522ab', 'Website điện tử', '<p>Mô tả website điện tử</p>', 2023, 1, 9, '536d42cf-1980-4679-9533-2be362efef9f', b'0', 1694125737662, 1694125737662);
INSERT INTO `thesis` VALUES ('63946da8-8220-448e-96fc-ec8612ab0107', 'Website xem phim', '<p>Website xem phim</p>', 2023, 1, 4, 'da163727-97e4-4cff-9137-bddb030dab09', b'1', 1694110657973, 1694110657973);
INSERT INTO `thesis` VALUES ('6ce34fe2-3c2c-4398-9988-f64beeda0e96', 'Website bán hàng', '<p>Mô tả đề tài</p>', 2023, 1, 2, '6036d7d9-3e8a-48f3-9659-bc5629e8f65b', b'0', 1694116207690, 1694116207690);
INSERT INTO `thesis` VALUES ('6e27b4a3-37c8-4983-9ea4-8869147a9038', 'XÂY DỰNG HỆ THỐNG NHÀ THÔNG MINH ĐIỀU KHIỂN BẰNG GIỌNG NÓI THÔNG QUA GOOGLE ASSISTANT VÀ MODULE WIFI ESP8266', NULL, 2020, 2, 9, '0001', b'0', 1694107570178, 1694107570178);
INSERT INTO `thesis` VALUES ('7885487c-173a-4c95-a6f0-dd0ee91ff301', 'XÂY DỰNG HỆ THỐNG GIÁM SÁT AO NUÔI THỦY SẢN SỬ DỤNG CÁC BỘ KIT ĐO CỦA IOT ARDUINO VÀ CÔNG NGHỆ FLUTTER ', NULL, 2021, 2, 9, '0001', b'0', 1694100258629, 1694100258629);
INSERT INTO `thesis` VALUES ('7f08b37b-4a3f-4509-a0ac-ba8bcb1bfb4c', 'Website xem phim', '<p>Mô tả Website xem phim</p>', 2023, 1, 5, '55d03e5a-1a41-478d-bca5-7e5da4ddb73d', b'0', 1694115177408, 1694115177408);
INSERT INTO `thesis` VALUES ('88273225-27fe-4286-a1d6-0baf74e01477', 'LUẬN VĂN TỐT NGHIỆP NGHIÊN CỨU NHẰM NÂNG CAO KHẢ NĂNG BẢO MẬT MỘT SỐ WEB SERVER VÀ ỨNG DỤNG MOD SECURITY', NULL, 2018, 2, 9, '0001', b'0', 1694104549358, 1694104549358);
INSERT INTO `thesis` VALUES ('8d959b3a-3720-4365-b5b0-12ab48d97829', 'XÂY DỰNG GIẢI PHÁP TRẢ LỜI TỰ ĐỘNG (CHATBOT) BẰNG TIẾNG VIỆT', NULL, 2021, 2, 9, '0001', b'0', 1694100986518, 1694100986518);
INSERT INTO `thesis` VALUES ('98a81636-3cde-4630-a5e1-b6da3d3ffbe5', ' XÂY DỰNG HỆ THỐNG CẢNH BÁO NGẬP LỤT TRÊN NỀN TẢNG WEBSITE VÀ MOBILE', NULL, 2019, 2, 9, '0001', b'0', 1694106742168, 1694106742168);
INSERT INTO `thesis` VALUES ('98e2e7fc-c01b-4156-92d4-9f5633fb68ac', 'Nghiên cứu thuật toán Doc2Vec ứng dụng vào bài toán kiểm tra độ tương đồng của luận văn.', NULL, 2021, 2, 9, '0001', b'0', 1694101645518, 1694101645518);
INSERT INTO `thesis` VALUES ('a2f40e1f-d6bc-4103-8ec5-10bee7fad807', 'XÂY DỰNG PHẦN MỀM TƯ VẤN NGHỀ NGHIỆP CHO HỌC SINH TRUNG HỌC PHỔ THÔNG SỬ DỤNG MÔ HÌNH DATAMINING', NULL, 2019, 2, 9, '0001', b'0', 1694102712146, 1694102712146);
INSERT INTO `thesis` VALUES ('a487175f-50b0-46d5-83a1-b092006fa779', ' ỨNG DỤNG ĐIỂM DANH SINH VIÊN BẰNG PHƯƠNG PHÁP NHẬN DIỆN KHUÔN MẶT', NULL, 2020, 2, 9, '0001', b'0', 1694105775570, 1694105775570);
INSERT INTO `thesis` VALUES ('b2f49b75-4453-46b9-99b4-43f63473c90f', 'Test', '<p>Test</p>', 2023, 1, 3, 'b345b277-74e0-45af-a14e-d1dbd62a7d5f', b'0', 1694112902246, 1694112902246);
INSERT INTO `thesis` VALUES ('b821bf51-d50d-4b43-b2ca-1cf35e55fbdf', 'ÁP DỤNG FRAMEWORK REACT NATIVE ĐỂ XÂY DỰNG ỨNG DỤNG CHỢ XE', NULL, 2018, 2, 9, '0001', b'0', 1694105142264, 1694105142264);
INSERT INTO `thesis` VALUES ('bda2bc97-0934-4c76-b54e-345ac24cfaa4', 'ỨNG DỤNG CHẤM CÔNG BẰNG VÂN TAY SỬ DỤNG THƯ VIỆN OPENCV', NULL, 2020, 2, 9, '0001', b'0', 1694103736709, 1694103736709);
INSERT INTO `thesis` VALUES ('c2b256ba-c88b-4341-b13f-745d781a1f39', 'NGHIÊN CỨU ỨNG DỤNG YOLO ĐỂ NHẬN DẠNG ĐỐI TƯỢNG CHO CỬA HÀNG TIỆN LỢI', NULL, 2020, 1, 9, '0001', b'0', 1694103372560, 1694103372560);
INSERT INTO `thesis` VALUES ('c6d271a6-2c26-4766-a849-448df2558dc0', 'XÂY DỰNG HỆ THỐNG THI ONLINE ĐẠT CHUẨN INSTRUCTIONAL MANAGEMENT SYSTEM (IMS) QUESTION AND TESTIN TEROPERABILITY (QTI)', NULL, 2018, 2, 9, '0001', b'0', 1694105505447, 1694105505447);
INSERT INTO `thesis` VALUES ('c8421173-d1e5-4877-81ab-023c9bb08e6c', ' ỨNG DỤNG CÔNG NGHỆ NODE.JS XÂY DỰNG WEBSITE HỖ TRỢ MUA BÁN NÔNG SẢN', NULL, 2018, 2, 9, '0001', b'0', 1694107264191, 1694107264191);
INSERT INTO `thesis` VALUES ('e70058ae-fd56-40be-aecf-b69c21005777', 'NGHIÊN CỨU GIẢI THUẬT TỐI ƯU ĐA MỤC TIÊU SHO (SPOTTED HYENA OPTIMIZER) ỨNG DỤNG VÀO BÀI TOÁN SẮP XẾP THỜI KHÓA BIỂU.', NULL, 2020, 2, 9, '0001', b'0', 1694106076598, 1694106076598);
INSERT INTO `thesis` VALUES ('ec44caef-c23b-4548-bb06-eec1c54bd76d', 'Xây dựng ứng dụng hỗ trợ giải các bài tập Trí tuệ nhân tạo', NULL, 2021, 2, 9, '0001', b'0', 1694098904598, 1694098904598);

-- ----------------------------
-- Table structure for thesis_defense_calendar
-- ----------------------------
DROP TABLE IF EXISTS `thesis_defense_calendar`;
CREATE TABLE `thesis_defense_calendar`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `thesis_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `timestamp` bigint NOT NULL,
  `room` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of thesis_defense_calendar
-- ----------------------------
INSERT INTO `thesis_defense_calendar` VALUES (6, '63893d42-920f-4240-bce1-8ef3584522ab', 1695335817918, '123', b'0', 1694126229023, 1694126229023);
INSERT INTO `thesis_defense_calendar` VALUES (7, '446ba792-5747-4e36-9000-1845b4e046c3', 1694127724841, '123', b'0', 1694127732904, 1694127732904);

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
INSERT INTO `thesis_document` VALUES ('1d8e9660-181a-4d00-a04b-d7615090249a', 'b821bf51-d50d-4b43-b2ca-1cf35e55fbdf', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694105136749-KLTN_Ung-dung-Cho-Xe_Ap-dung-React-native_14130110_14130052.docx?alt=media&token=77a4ccca-4c05-4aad-be0a-83e86d103b38', 2, b'0', 1694105142264, 1694105142264);
INSERT INTO `thesis_document` VALUES ('23bced91-53ed-4f47-9072-19cf19f6b978', '33a76904-09bd-4a9b-82ff-296e684e70db', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694106379522-LVENGLISH.docx?alt=media&token=4767996c-dc44-43b3-a409-f32be19a3d42', 2, b'0', 1694106392398, 1694106392398);
INSERT INTO `thesis_document` VALUES ('377f35f4-fe1e-4216-b3d7-a22d4a88e00e', 'c2b256ba-c88b-4341-b13f-745d781a1f39', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694103365514-NguyenVanQuang_16130529_LeVanThuan_16130606.docx?alt=media&token=d257d321-c1af-4510-a097-f5bbdc775282', 2, b'0', 1694103372559, 1694103372559);
INSERT INTO `thesis_document` VALUES ('38a884c5-fb7d-421e-9ca2-48b0e1b53cb3', '7f08b37b-4a3f-4509-a0ac-ba8bcb1bfb4c', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694115163631-19130012_19130022_DeCuongChiTiet.pdf?alt=media&token=ffdc1f2b-da12-4fa0-bd6b-969c8d8dbf96', 1, b'0', 1694115177408, 1694115177408);
INSERT INTO `thesis_document` VALUES ('496be059-14b8-4c7e-a71f-14420835dc05', '30fa1e20-fb78-4886-af1a-06e8c14b4702', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694099483198-LVTN_2021_Nhom12.docx?alt=media&token=a20e850c-25b7-4d96-ae9d-1dca1c6646a4', 2, b'0', 1694099488536, 1694099488536);
INSERT INTO `thesis_document` VALUES ('4a2f12d7-44ce-4ace-a25e-e6b24598797c', '2e0490ed-022f-4254-a2a1-9fd135c251e0', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694098383447-Lu%E1%BA%ADn%20v%C4%83n%20t%E1%BB%91t%20nghi%E1%BB%87p.docx?alt=media&token=3666dbf3-985d-468f-8f11-92e9629bb166', 2, b'0', 1694098409406, 1694098409406);
INSERT INTO `thesis_document` VALUES ('5c2d41cc-2320-4945-8846-034b4ea529b4', '63893d42-920f-4240-bce1-8ef3584522ab', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694126537504-1692610496607-Lu%E1%BA%ADn%20v%C4%83n%20t%E1%BB%91t%20nghi%E1%BB%87p.docx?alt=media&token=aee7b584-3b9e-4c63-bd23-ad666a763082', 2, b'0', 1694126549673, 1694126549673);
INSERT INTO `thesis_document` VALUES ('5f490fd8-888f-4f5f-9e99-6faf577b27d7', '446ba792-5747-4e36-9000-1845b4e046c3', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694127289597-19130012_19130022_DeCuongChiTiet.pdf?alt=media&token=324b6b21-6296-4b0b-8461-ba6467bf101a', 1, b'0', 1694127310032, 1694127310032);
INSERT INTO `thesis_document` VALUES ('66581c62-ded3-47cb-a7f0-8c15ed6cc381', 'e70058ae-fd56-40be-aecf-b69c21005777', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694106070261-Luanvantotnghiep_Duc_Luc.docx?alt=media&token=bce7038e-edf4-4164-9ac8-b9d5959d4b0e', 2, b'0', 1694106076598, 1694106076598);
INSERT INTO `thesis_document` VALUES ('66da5816-4525-4550-a843-7fcfe35ada33', '98a81636-3cde-4630-a5e1-b6da3d3ffbe5', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694106736341-LVTN_15130132_15130198_TTTNga_BanSuaDoi_FINAL_moi.docx?alt=media&token=8e5430a5-09b4-407f-897c-2f27378abc61', 2, b'0', 1694106742168, 1694106742168);
INSERT INTO `thesis_document` VALUES ('71c6a117-f8f0-414e-b665-d88b98e21b7b', '63893d42-920f-4240-bce1-8ef3584522ab', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694125725547-19130012_19130022_DeCuongChiTiet.pdf?alt=media&token=c1d0b0db-570e-4d5b-b41e-f7a080e62063', 1, b'0', 1694125737662, 1694125737662);
INSERT INTO `thesis_document` VALUES ('734a23aa-6e62-4d63-8234-71bcc8830bdf', 'a2f40e1f-d6bc-4103-8ec5-10bee7fad807', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694102695785-LV_TuVanHuongNghiep_HSTHPH.docx?alt=media&token=a1a241ba-91d7-4650-8ef4-5010276ff5cc', 2, b'0', 1694102712146, 1694102712146);
INSERT INTO `thesis_document` VALUES ('7b5e6dae-add7-407c-9798-9d48b85bf4cb', '02b0dd30-257d-4a00-9499-774481ff2f76', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694099795643-LVTN_17130044-17130195_Nhom14.txt?alt=media&token=ccc49605-b443-4b49-9e65-e6f6ea522777', 2, b'0', 1694099803362, 1694099803362);
INSERT INTO `thesis_document` VALUES ('7cffd788-c851-451a-955e-04d2582b3e28', 'ec44caef-c23b-4548-bb06-eec1c54bd76d', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694098897412-Lu%E1%BA%ADn%20v%C4%83n_%C4%90%E1%BA%B7ng%20Minh%20Ti%E1%BA%BFn%2017130242_Nguy%E1%BB%85n%20Th%E1%BB%8B%20Thu%C3%BD%20Ph%C6%B0%C6%A1ng%2017130170.docx?alt=media&token=9c63b50e-810e-4133-bfd2-13f3d5a26fb3', 2, b'0', 1694098904598, 1694098904598);
INSERT INTO `thesis_document` VALUES ('87fff349-8a37-4b0c-90c4-3c81047022a7', 'bda2bc97-0934-4c76-b54e-345ac24cfaa4', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694103730355-Tai-Lieu-Luan-Van.docx?alt=media&token=9f6bdc3c-a7dd-4e77-a1e5-d61cbbf6eb38', 2, b'0', 1694103736709, 1694103736709);
INSERT INTO `thesis_document` VALUES ('8f5a157b-52d6-4428-8e39-7be03bbf291c', '7885487c-173a-4c95-a6f0-dd0ee91ff301', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694100252856-LVTN2021_Nhom13_17130016_17130276.docx?alt=media&token=52891e2d-0bad-4299-b217-80adfd98c173', 2, b'0', 1694100258629, 1694100258629);
INSERT INTO `thesis_document` VALUES ('954ae43c-bee7-4d5d-a941-84289c6af879', '6ce34fe2-3c2c-4398-9988-f64beeda0e96', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694116197694-19130012_19130022_DeCuongChiTiet.pdf?alt=media&token=468b5f95-2077-4020-b53c-c2bdcdf42743', 1, b'0', 1694116207690, 1694116207690);
INSERT INTO `thesis_document` VALUES ('98049b4f-130a-412d-a45d-046f4e2f740d', '88273225-27fe-4286-a1d6-0baf74e01477', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694104529052-BaiLuan.docx?alt=media&token=6c2cb0c8-411a-4780-9cd2-c808ac7385d6', 2, b'0', 1694104549358, 1694104549358);
INSERT INTO `thesis_document` VALUES ('995b3276-8b63-4632-82e2-32e08ea976ab', '6e27b4a3-37c8-4983-9ea4-8869147a9038', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694107565063-LVTN2020_SmartHome_16130312_16130670.docx?alt=media&token=0c81423f-e43e-480f-9497-82968f074ae5', 2, b'0', 1694107570178, 1694107570178);
INSERT INTO `thesis_document` VALUES ('a0272900-d945-49b9-bd4c-4d98cf4cedb7', '3fc76141-d7c4-4bd8-96b3-f13374c60398', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694102081253-17130061_17130135_KLTN_WEBSITE_TIM_PHONG_TRO_FINAL.docx?alt=media&token=07e0362d-99f2-4840-a248-d1df391b6561', 2, b'0', 1694102086513, 1694102086513);
INSERT INTO `thesis_document` VALUES ('a8720fef-88fc-4dfe-aa7b-f429e7cd0623', '8d959b3a-3720-4365-b5b0-12ab48d97829', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694100960922-KL_2021_17130045_17130216.pdf?alt=media&token=f61d893e-eaba-47de-a044-c5b572787ceb', 2, b'0', 1694100986518, 1694100986518);
INSERT INTO `thesis_document` VALUES ('b2a794fb-064e-4780-8a22-879b8c611f9c', '98e2e7fc-c01b-4156-92d4-9f5633fb68ac', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694101636825-Luanvantotnghiep_Hau-Tung.docx?alt=media&token=a23ed20a-f345-4301-a902-85252d4d2535', 2, b'0', 1694101645518, 1694101645518);
INSERT INTO `thesis_document` VALUES ('b59d30ee-664d-458c-b3aa-1e249c05abf9', 'c6d271a6-2c26-4766-a849-448df2558dc0', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694105500387-KLTN-14130351-14130297.docx?alt=media&token=f6a390e2-502b-4f96-9db1-182f626a4cf3', 2, b'0', 1694105505447, 1694105505447);
INSERT INTO `thesis_document` VALUES ('c732d03d-4f57-4b22-b5ee-f9b6edbb7a19', '5e58be4b-9a73-4999-801d-6429fe5feb8c', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694103079347-LVTN_SmartFarm_16130490_16130671_final.docx?alt=media&token=f2e9900e-b62b-41e2-989d-bc4f70d6a5e4', 2, b'0', 1694103085163, 1694103085163);
INSERT INTO `thesis_document` VALUES ('c8d5291e-d857-456b-a10c-5a70e5cec3a4', '3f63290c-2338-4e66-854d-ded759f085dd', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694104093197-TaiLieuNLUmath.docx?alt=media&token=4b938a30-511e-4de8-9dda-59bd55265b5f', 2, b'0', 1694104098178, 1694104098178);
INSERT INTO `thesis_document` VALUES ('c9795b25-e4b4-40ee-86a0-b4823d2e53cb', '3dac73ee-c43a-4481-9740-fa04e1c9c169', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694104865490-KLTN_HeThongBanHang.docx?alt=media&token=23612f51-81c4-4abf-8793-7efa748ca0e3', 2, b'0', 1694104869333, 1694104869333);
INSERT INTO `thesis_document` VALUES ('d89a1985-6b99-4d45-8f74-8e140db4f75c', 'b2f49b75-4453-46b9-99b4-43f63473c90f', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694112895685-19130012_19130022_DeCuongChiTiet.pdf?alt=media&token=4478ddc6-86ec-4cd6-8776-60ae63886450', 1, b'0', 1694112902246, 1694112902246);
INSERT INTO `thesis_document` VALUES ('e5a18f22-0ec3-48fb-b305-e58258175d6d', '446ba792-5747-4e36-9000-1845b4e046c3', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694127931590-DS%20KLTN_HK2%2022%2023_PB.pdf?alt=media&token=7a8e810a-825f-4010-887d-fed82804ac4b', 2, b'0', 1694127937486, 1694127937486);
INSERT INTO `thesis_document` VALUES ('f2a780bf-19e2-4d57-a7be-473e9e479a1f', 'c8421173-d1e5-4877-81ab-023c9bb08e6c', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694107257340-LVTN_DangMinhPhuVinh_LeThiThuong_ver4.docx?alt=media&token=ac3774a9-4231-4da2-a049-9ffdf6f2e712', 2, b'0', 1694107264191, 1694107264191);
INSERT INTO `thesis_document` VALUES ('f35ba804-c210-4313-92bd-7af97e284b20', 'a487175f-50b0-46d5-83a1-b092006fa779', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694105772465-Luan%20van%20tot%20nghiep_Sang_Hieu%20K2016.docx?alt=media&token=c69cbb41-be5e-407b-8fed-9ccc57c78ec2', 2, b'0', 1694105775570, 1694105775570);
INSERT INTO `thesis_document` VALUES ('f9651f43-c781-47f1-a618-d861db588b6e', '63946da8-8220-448e-96fc-ec8612ab0107', 'https://firebasestorage.googleapis.com/v0/b/kltn-4d455.appspot.com/o/1694110636974-19130012_19130022_DeCuongChiTiet.pdf?alt=media&token=8d496435-67a7-408a-8093-947f25ca6ddd', 1, b'0', 1694110657973, 1694110657973);

-- ----------------------------
-- Table structure for thesis_lecturer
-- ----------------------------
DROP TABLE IF EXISTS `thesis_lecturer`;
CREATE TABLE `thesis_lecturer`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `thesis_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `lecturer_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `is_active` bit(1) NOT NULL,
  `is_deleted` bit(1) NOT NULL,
  `created_at` bigint NOT NULL,
  `updated_at` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 43 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of thesis_lecturer
-- ----------------------------
INSERT INTO `thesis_lecturer` VALUES (14, '2e0490ed-022f-4254-a2a1-9fd135c251e0', '9dfa3f6b-d9db-4edd-b203-3f503f86cee7', b'0', b'0', 1694098409532, 1694098409532);
INSERT INTO `thesis_lecturer` VALUES (15, 'ec44caef-c23b-4548-bb06-eec1c54bd76d', '9dfa3f6b-d9db-4edd-b203-3f503f86cee7', b'0', b'0', 1694098904641, 1694098904641);
INSERT INTO `thesis_lecturer` VALUES (16, '30fa1e20-fb78-4886-af1a-06e8c14b4702', '1d84f16e-f21e-43dd-8b21-61c357142d1d', b'0', b'0', 1694099488576, 1694099488576);
INSERT INTO `thesis_lecturer` VALUES (17, '02b0dd30-257d-4a00-9499-774481ff2f76', '1d84f16e-f21e-43dd-8b21-61c357142d1d', b'0', b'0', 1694099803403, 1694099803403);
INSERT INTO `thesis_lecturer` VALUES (18, '7885487c-173a-4c95-a6f0-dd0ee91ff301', '1d84f16e-f21e-43dd-8b21-61c357142d1d', b'0', b'0', 1694100258668, 1694100258668);
INSERT INTO `thesis_lecturer` VALUES (19, '8d959b3a-3720-4365-b5b0-12ab48d97829', 'cda92fcb-04fd-438b-a9f7-bf321b54197e', b'0', b'0', 1694100986569, 1694100986569);
INSERT INTO `thesis_lecturer` VALUES (20, '98e2e7fc-c01b-4156-92d4-9f5633fb68ac', '9dfa3f6b-d9db-4edd-b203-3f503f86cee7', b'0', b'0', 1694101645555, 1694101645555);
INSERT INTO `thesis_lecturer` VALUES (21, '3fc76141-d7c4-4bd8-96b3-f13374c60398', '6b7b17ee-8bed-411e-b3e0-e52bc822f76c', b'0', b'0', 1694102086552, 1694102086552);
INSERT INTO `thesis_lecturer` VALUES (22, 'a2f40e1f-d6bc-4103-8ec5-10bee7fad807', 'd195b534-33df-4238-8b20-d7d81892da25', b'0', b'0', 1694102712188, 1694102712188);
INSERT INTO `thesis_lecturer` VALUES (23, '5e58be4b-9a73-4999-801d-6429fe5feb8c', '6b7b17ee-8bed-411e-b3e0-e52bc822f76c', b'0', b'0', 1694103085201, 1694103085201);
INSERT INTO `thesis_lecturer` VALUES (24, 'c2b256ba-c88b-4341-b13f-745d781a1f39', '9dfa3f6b-d9db-4edd-b203-3f503f86cee7', b'0', b'0', 1694103372599, 1694103372599);
INSERT INTO `thesis_lecturer` VALUES (25, 'bda2bc97-0934-4c76-b54e-345ac24cfaa4', '9dfa3f6b-d9db-4edd-b203-3f503f86cee7', b'0', b'0', 1694103736744, 1694103736744);
INSERT INTO `thesis_lecturer` VALUES (26, '3f63290c-2338-4e66-854d-ded759f085dd', '9dfa3f6b-d9db-4edd-b203-3f503f86cee7', b'0', b'0', 1694104098218, 1694104098218);
INSERT INTO `thesis_lecturer` VALUES (27, '88273225-27fe-4286-a1d6-0baf74e01477', '94382753-88a7-4c56-87a1-f89a6ec29edb', b'0', b'0', 1694104549397, 1694104549397);
INSERT INTO `thesis_lecturer` VALUES (28, '3dac73ee-c43a-4481-9740-fa04e1c9c169', '6b7b17ee-8bed-411e-b3e0-e52bc822f76c', b'0', b'0', 1694104869368, 1694104869368);
INSERT INTO `thesis_lecturer` VALUES (29, 'b821bf51-d50d-4b43-b2ca-1cf35e55fbdf', 'd195b534-33df-4238-8b20-d7d81892da25', b'0', b'0', 1694105142301, 1694105142301);
INSERT INTO `thesis_lecturer` VALUES (30, 'c6d271a6-2c26-4766-a849-448df2558dc0', '0d257149-8b65-4727-bec5-9ec8b4c2e596', b'0', b'0', 1694105505486, 1694105505486);
INSERT INTO `thesis_lecturer` VALUES (31, 'a487175f-50b0-46d5-83a1-b092006fa779', '9dfa3f6b-d9db-4edd-b203-3f503f86cee7', b'0', b'0', 1694105775607, 1694105775607);
INSERT INTO `thesis_lecturer` VALUES (32, 'e70058ae-fd56-40be-aecf-b69c21005777', '9dfa3f6b-d9db-4edd-b203-3f503f86cee7', b'0', b'0', 1694106076636, 1694106076636);
INSERT INTO `thesis_lecturer` VALUES (33, '33a76904-09bd-4a9b-82ff-296e684e70db', '6b7b17ee-8bed-411e-b3e0-e52bc822f76c', b'0', b'0', 1694106392432, 1694106392432);
INSERT INTO `thesis_lecturer` VALUES (34, '98a81636-3cde-4630-a5e1-b6da3d3ffbe5', '6b7b17ee-8bed-411e-b3e0-e52bc822f76c', b'0', b'0', 1694106742203, 1694106742203);
INSERT INTO `thesis_lecturer` VALUES (35, 'c8421173-d1e5-4877-81ab-023c9bb08e6c', '9ef47ebf-6b39-4d60-86c7-cc56e284c4d6', b'0', b'0', 1694107264227, 1694107264227);
INSERT INTO `thesis_lecturer` VALUES (36, '6e27b4a3-37c8-4983-9ea4-8869147a9038', '6b7b17ee-8bed-411e-b3e0-e52bc822f76c', b'0', b'0', 1694107570212, 1694107570212);
INSERT INTO `thesis_lecturer` VALUES (37, '63946da8-8220-448e-96fc-ec8612ab0107', '9dfa3f6b-d9db-4edd-b203-3f503f86cee7', b'1', b'0', 1694110658080, 1694110658080);
INSERT INTO `thesis_lecturer` VALUES (38, 'b2f49b75-4453-46b9-99b4-43f63473c90f', '9dfa3f6b-d9db-4edd-b203-3f503f86cee7', b'1', b'0', 1694112902369, 1694112902369);
INSERT INTO `thesis_lecturer` VALUES (39, '7f08b37b-4a3f-4509-a0ac-ba8bcb1bfb4c', '1d84f16e-f21e-43dd-8b21-61c357142d1d', b'1', b'0', 1694115177566, 1694115177566);
INSERT INTO `thesis_lecturer` VALUES (40, '6ce34fe2-3c2c-4398-9988-f64beeda0e96', '9dfa3f6b-d9db-4edd-b203-3f503f86cee7', b'1', b'0', 1694116207776, 1694116207776);
INSERT INTO `thesis_lecturer` VALUES (41, '63893d42-920f-4240-bce1-8ef3584522ab', '9dfa3f6b-d9db-4edd-b203-3f503f86cee7', b'1', b'0', 1694125737757, 1694125737757);
INSERT INTO `thesis_lecturer` VALUES (42, '446ba792-5747-4e36-9000-1845b4e046c3', '9ef47ebf-6b39-4d60-86c7-cc56e284c4d6', b'1', b'0', 1694127310106, 1694127310106);

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
) ENGINE = InnoDB AUTO_INCREMENT = 22 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of thesis_register_calendar
-- ----------------------------
INSERT INTO `thesis_register_calendar` VALUES (15, 1694101322510, 1694792522510, b'0', b'0', 1694101324915, 1694101324915);
INSERT INTO `thesis_register_calendar` VALUES (16, 1694112848034, 1694285648034, b'0', b'0', 1694112851930, 1694112851930);
INSERT INTO `thesis_register_calendar` VALUES (17, 1694113931093, 1694200331093, b'0', b'0', 1694113933576, 1694113933576);
INSERT INTO `thesis_register_calendar` VALUES (18, 1694115072144, 1694460672144, b'0', b'0', 1694115075258, 1694115075258);
INSERT INTO `thesis_register_calendar` VALUES (19, 1694029711174, 1694202511174, b'0', b'0', 1694116117065, 1694116117065);
INSERT INTO `thesis_register_calendar` VALUES (20, 1694039242458, 1694644042458, b'0', b'0', 1694125648985, 1694125648985);
INSERT INTO `thesis_register_calendar` VALUES (21, 1694040818977, 1694213618977, b'1', b'0', 1694127222176, 1694127222176);

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
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of thesis_review_calendar
-- ----------------------------
INSERT INTO `thesis_review_calendar` VALUES (7, '7f08b37b-4a3f-4509-a0ac-ba8bcb1bfb4c', 1694115531320, 1694547531320, b'0', 1694115536372, 1694115536372);
INSERT INTO `thesis_review_calendar` VALUES (8, '63893d42-920f-4240-bce1-8ef3584522ab', 1694039608677, 1695162808677, b'0', 1694126013018, 1694126013018);
INSERT INTO `thesis_review_calendar` VALUES (9, '446ba792-5747-4e36-9000-1845b4e046c3', 1694127566941, 1694473166941, b'0', 1694127571772, 1694127571772);

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
INSERT INTO `thesis_reviewer_comment` VALUES ('33dfb25b-a8ff-45ab-bd71-2b924a2d9665', 'b2f49b75-4453-46b9-99b4-43f63473c90f', '6b7b17ee-8bed-411e-b3e0-e52bc822f76c', NULL, NULL, b'0', b'0', 1694112999507, 1694112999507);
INSERT INTO `thesis_reviewer_comment` VALUES ('3b5f03b3-9717-4e42-a7b1-bc79e00b440f', '446ba792-5747-4e36-9000-1845b4e046c3', '1d84f16e-f21e-43dd-8b21-61c357142d1d', '<p>Dat</p>', 1, b'0', b'0', 1694127457546, 1694127457546);
INSERT INTO `thesis_reviewer_comment` VALUES ('4c9e8d5d-a55b-47b6-b255-6471113b2eeb', '63946da8-8220-448e-96fc-ec8612ab0107', '1d84f16e-f21e-43dd-8b21-61c357142d1d', NULL, NULL, b'0', b'0', 1694111941516, 1694111941516);
INSERT INTO `thesis_reviewer_comment` VALUES ('67a5f507-b71f-4144-8969-d40a4c0b39b4', '7f08b37b-4a3f-4509-a0ac-ba8bcb1bfb4c', '1d84f16e-f21e-43dd-8b21-61c357142d1d', '<p>Dat</p>', 1, b'0', b'0', 1694115312375, 1694115312375);
INSERT INTO `thesis_reviewer_comment` VALUES ('764bcc87-e7bf-4af8-be70-eaecfe4ca973', 'b2f49b75-4453-46b9-99b4-43f63473c90f', '1d84f16e-f21e-43dd-8b21-61c357142d1d', NULL, NULL, b'0', b'0', 1694112999506, 1694112999506);
INSERT INTO `thesis_reviewer_comment` VALUES ('be3ee4ab-132a-44d6-b5c6-6496c4e0fa5b', '446ba792-5747-4e36-9000-1845b4e046c3', '9dfa3f6b-d9db-4edd-b203-3f503f86cee7', '<p>Dat</p>', 1, b'0', b'0', 1694127457550, 1694127457550);
INSERT INTO `thesis_reviewer_comment` VALUES ('d1f7c9f9-eac1-44c5-a52b-ef235719925f', '7f08b37b-4a3f-4509-a0ac-ba8bcb1bfb4c', '6b7b17ee-8bed-411e-b3e0-e52bc822f76c', '<p>Dat</p>', 1, b'0', b'0', 1694115312378, 1694115312378);
INSERT INTO `thesis_reviewer_comment` VALUES ('e09f9834-000e-4863-b6cf-1d643ec174b9', '63893d42-920f-4240-bce1-8ef3584522ab', '9dfa3f6b-d9db-4edd-b203-3f503f86cee7', '<p>Dat</p>', 1, b'0', b'0', 1694125859348, 1694125859348);
INSERT INTO `thesis_reviewer_comment` VALUES ('f8690a06-ae56-4d96-8f2f-944b5976f92d', '63893d42-920f-4240-bce1-8ef3584522ab', '1d84f16e-f21e-43dd-8b21-61c357142d1d', '<p>Dat</p>', 1, b'0', b'0', 1694125859345, 1694125859345);
INSERT INTO `thesis_reviewer_comment` VALUES ('faa02edf-2330-4abd-885c-d84cb57c7a5e', '63946da8-8220-448e-96fc-ec8612ab0107', '9ef47ebf-6b39-4d60-86c7-cc56e284c4d6', '<p>Tốt</p>', 1, b'0', b'0', 1694111466939, 1694111466939);

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
) ENGINE = InnoDB AUTO_INCREMENT = 81 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of thesis_student
-- ----------------------------
INSERT INTO `thesis_student` VALUES (23, '2e0490ed-022f-4254-a2a1-9fd135c251e0', '0043eeef-d7e6-45f1-8102-c3ce8ab03ac5', b'0', b'0', 1694098409526, 1694098409526);
INSERT INTO `thesis_student` VALUES (24, '2e0490ed-022f-4254-a2a1-9fd135c251e0', '28e4ecb6-500b-459a-b2b5-d87c3df92ca7', b'0', b'0', 1694098409530, 1694098409530);
INSERT INTO `thesis_student` VALUES (25, 'ec44caef-c23b-4548-bb06-eec1c54bd76d', '4d4f66fb-f84c-418f-9cd4-b43b4c46a0b7', b'0', b'0', 1694098904639, 1694098904639);
INSERT INTO `thesis_student` VALUES (26, 'ec44caef-c23b-4548-bb06-eec1c54bd76d', '6753347b-4138-4ccc-bd0e-6865befbafba', b'0', b'0', 1694098904640, 1694098904640);
INSERT INTO `thesis_student` VALUES (27, '30fa1e20-fb78-4886-af1a-06e8c14b4702', 'bc1adb23-9016-4de7-b72c-d1ec0ede7e3b', b'0', b'0', 1694099488575, 1694099488575);
INSERT INTO `thesis_student` VALUES (28, '30fa1e20-fb78-4886-af1a-06e8c14b4702', 'ea198a7a-fb0b-4a35-a465-60aff2f834a1', b'0', b'0', 1694099488575, 1694099488575);
INSERT INTO `thesis_student` VALUES (29, '02b0dd30-257d-4a00-9499-774481ff2f76', '1f3896cd-3dba-4804-917e-ef8adad6c4e8', b'0', b'0', 1694099803402, 1694099803402);
INSERT INTO `thesis_student` VALUES (30, '02b0dd30-257d-4a00-9499-774481ff2f76', '14129268-4cb8-46dd-aaf4-aa0d40f901c6', b'0', b'0', 1694099803403, 1694099803403);
INSERT INTO `thesis_student` VALUES (31, '7885487c-173a-4c95-a6f0-dd0ee91ff301', 'd880f951-8bfb-4867-a438-2a556398a166', b'0', b'0', 1694100258667, 1694100258667);
INSERT INTO `thesis_student` VALUES (32, '7885487c-173a-4c95-a6f0-dd0ee91ff301', '28aff2a7-3b8c-409e-a1e0-9fc04134993e', b'0', b'0', 1694100258668, 1694100258668);
INSERT INTO `thesis_student` VALUES (33, '8d959b3a-3720-4365-b5b0-12ab48d97829', '773ed4fc-4bed-44f5-8eda-4830518b95d7', b'0', b'0', 1694100986568, 1694100986568);
INSERT INTO `thesis_student` VALUES (34, '8d959b3a-3720-4365-b5b0-12ab48d97829', '07a09cd1-cca4-4e5b-af3e-ce3acec31249', b'0', b'0', 1694100986569, 1694100986569);
INSERT INTO `thesis_student` VALUES (35, '98e2e7fc-c01b-4156-92d4-9f5633fb68ac', 'ceb3533b-931a-429b-828a-3b3c4152463c', b'0', b'0', 1694101645554, 1694101645554);
INSERT INTO `thesis_student` VALUES (36, '98e2e7fc-c01b-4156-92d4-9f5633fb68ac', '6ea99057-f64d-406b-a126-287f3e31954c', b'0', b'0', 1694101645555, 1694101645555);
INSERT INTO `thesis_student` VALUES (37, '3fc76141-d7c4-4bd8-96b3-f13374c60398', '9cdca43b-6d5c-46ad-a2bf-01b0b879f20d', b'0', b'0', 1694102086551, 1694102086551);
INSERT INTO `thesis_student` VALUES (38, '3fc76141-d7c4-4bd8-96b3-f13374c60398', 'db8cd058-19d5-4bb8-84cd-8f8927aed99b', b'0', b'0', 1694102086552, 1694102086552);
INSERT INTO `thesis_student` VALUES (39, 'a2f40e1f-d6bc-4103-8ec5-10bee7fad807', '59593072-4fbd-437c-af92-38a40556df66', b'0', b'0', 1694102712187, 1694102712187);
INSERT INTO `thesis_student` VALUES (40, 'a2f40e1f-d6bc-4103-8ec5-10bee7fad807', '3fad7e3d-7422-46f7-8c9a-5a36efa0fa0c', b'0', b'0', 1694102712188, 1694102712188);
INSERT INTO `thesis_student` VALUES (41, '5e58be4b-9a73-4999-801d-6429fe5feb8c', '2b86e64f-fe12-490b-b3ed-d9dbf317aa5e', b'0', b'0', 1694103085200, 1694103085200);
INSERT INTO `thesis_student` VALUES (42, '5e58be4b-9a73-4999-801d-6429fe5feb8c', '222d9c28-0ca5-40b1-8074-ffda86f65668', b'0', b'0', 1694103085201, 1694103085201);
INSERT INTO `thesis_student` VALUES (43, 'c2b256ba-c88b-4341-b13f-745d781a1f39', 'e19d57ff-5089-49ad-9be2-f4e8d1440903', b'0', b'0', 1694103372598, 1694103372598);
INSERT INTO `thesis_student` VALUES (44, 'c2b256ba-c88b-4341-b13f-745d781a1f39', 'bccdc228-cb42-4c33-bc38-dfeff8f6dee3', b'0', b'0', 1694103372598, 1694103372598);
INSERT INTO `thesis_student` VALUES (45, 'bda2bc97-0934-4c76-b54e-345ac24cfaa4', '5fd0dc1c-749a-45ec-a7f1-ed4e6531644c', b'0', b'0', 1694103736743, 1694103736743);
INSERT INTO `thesis_student` VALUES (46, 'bda2bc97-0934-4c76-b54e-345ac24cfaa4', '431bba65-42e3-4be5-b201-bce3f31b8547', b'0', b'0', 1694103736744, 1694103736744);
INSERT INTO `thesis_student` VALUES (47, '3f63290c-2338-4e66-854d-ded759f085dd', '699f6ac7-93f5-4b48-b152-deddc78332dd', b'0', b'0', 1694104098217, 1694104098217);
INSERT INTO `thesis_student` VALUES (48, '3f63290c-2338-4e66-854d-ded759f085dd', '9eb9e30f-128d-487d-858c-b06bb10d9d81', b'0', b'0', 1694104098218, 1694104098218);
INSERT INTO `thesis_student` VALUES (49, '88273225-27fe-4286-a1d6-0baf74e01477', '7fc22c12-fa54-4986-b44e-3365be36f800', b'0', b'0', 1694104549396, 1694104549396);
INSERT INTO `thesis_student` VALUES (50, '88273225-27fe-4286-a1d6-0baf74e01477', '0662a9cc-1ece-4a49-aec3-4ab8a6147bf7', b'0', b'0', 1694104549397, 1694104549397);
INSERT INTO `thesis_student` VALUES (51, '3dac73ee-c43a-4481-9740-fa04e1c9c169', '732a8744-6a63-4d1f-94c3-363129a27823', b'0', b'0', 1694104869367, 1694104869367);
INSERT INTO `thesis_student` VALUES (52, '3dac73ee-c43a-4481-9740-fa04e1c9c169', 'ce7a0609-18af-46da-b3c8-d96056445ec5', b'0', b'0', 1694104869367, 1694104869367);
INSERT INTO `thesis_student` VALUES (53, 'b821bf51-d50d-4b43-b2ca-1cf35e55fbdf', '57c6ff2d-1732-4d2e-a67d-32dbe010b7e9', b'0', b'0', 1694105142301, 1694105142301);
INSERT INTO `thesis_student` VALUES (54, 'b821bf51-d50d-4b43-b2ca-1cf35e55fbdf', '94366443-58c3-479c-bb11-9bdfd7e540b1', b'0', b'0', 1694105142301, 1694105142301);
INSERT INTO `thesis_student` VALUES (55, 'c6d271a6-2c26-4766-a849-448df2558dc0', 'fd65eb74-4db4-4c6a-9c89-04bf90360914', b'0', b'0', 1694105505485, 1694105505485);
INSERT INTO `thesis_student` VALUES (56, 'c6d271a6-2c26-4766-a849-448df2558dc0', 'c77baa26-4ed6-4cad-8b0d-4977e4604592', b'0', b'0', 1694105505485, 1694105505485);
INSERT INTO `thesis_student` VALUES (57, 'a487175f-50b0-46d5-83a1-b092006fa779', '8cfb4971-b8a2-4741-b0f3-6b7a654f09da', b'0', b'0', 1694105775604, 1694105775604);
INSERT INTO `thesis_student` VALUES (58, 'a487175f-50b0-46d5-83a1-b092006fa779', 'cb918cee-0f79-4abd-b78e-915971e63b8e', b'0', b'0', 1694105775606, 1694105775606);
INSERT INTO `thesis_student` VALUES (59, 'e70058ae-fd56-40be-aecf-b69c21005777', 'f97ed062-bec3-4b37-93b8-f3d521b1c931', b'0', b'0', 1694106076636, 1694106076636);
INSERT INTO `thesis_student` VALUES (60, 'e70058ae-fd56-40be-aecf-b69c21005777', '6d6e29c9-f4d0-4fdb-8dc9-0eb58ce91158', b'0', b'0', 1694106076636, 1694106076636);
INSERT INTO `thesis_student` VALUES (61, '33a76904-09bd-4a9b-82ff-296e684e70db', '900af0a8-464e-408c-b7e1-9cef9ee64902', b'0', b'0', 1694106392432, 1694106392432);
INSERT INTO `thesis_student` VALUES (62, '33a76904-09bd-4a9b-82ff-296e684e70db', '78f769c8-425f-4438-ba59-0ed7fb6c6f79', b'0', b'0', 1694106392432, 1694106392432);
INSERT INTO `thesis_student` VALUES (63, '98a81636-3cde-4630-a5e1-b6da3d3ffbe5', '3191b1fb-1378-4b9a-bfd1-9cf7db7a0b6f', b'0', b'0', 1694106742202, 1694106742202);
INSERT INTO `thesis_student` VALUES (64, '98a81636-3cde-4630-a5e1-b6da3d3ffbe5', 'b825fdb5-318e-4a0e-8c35-d8d49d40ec22', b'0', b'0', 1694106742202, 1694106742202);
INSERT INTO `thesis_student` VALUES (65, 'c8421173-d1e5-4877-81ab-023c9bb08e6c', 'fb86a739-fa4b-41b4-9a7e-ec0f622dc9e9', b'0', b'0', 1694107264226, 1694107264226);
INSERT INTO `thesis_student` VALUES (66, 'c8421173-d1e5-4877-81ab-023c9bb08e6c', '074937a2-0a68-4441-b0b8-785cea801fdc', b'0', b'0', 1694107264227, 1694107264227);
INSERT INTO `thesis_student` VALUES (67, '6e27b4a3-37c8-4983-9ea4-8869147a9038', '6199e140-7828-4941-855c-78e74eb0c41c', b'0', b'0', 1694107570212, 1694107570212);
INSERT INTO `thesis_student` VALUES (68, '6e27b4a3-37c8-4983-9ea4-8869147a9038', '6aa7e509-a475-4bb1-971f-0d523c63ccdd', b'0', b'0', 1694107570212, 1694107570212);
INSERT INTO `thesis_student` VALUES (69, '63946da8-8220-448e-96fc-ec8612ab0107', 'da163727-97e4-4cff-9137-bddb030dab09', b'1', b'0', 1694110658078, 1694110658078);
INSERT INTO `thesis_student` VALUES (70, '63946da8-8220-448e-96fc-ec8612ab0107', '113fbbed-893c-4acd-9e3c-b0b44e662a1a', b'1', b'0', 1694110658080, 1694110658080);
INSERT INTO `thesis_student` VALUES (71, 'b2f49b75-4453-46b9-99b4-43f63473c90f', 'b345b277-74e0-45af-a14e-d1dbd62a7d5f', b'1', b'0', 1694112902366, 1694112902366);
INSERT INTO `thesis_student` VALUES (72, 'b2f49b75-4453-46b9-99b4-43f63473c90f', 'cf5ad10c-3077-4883-93c9-b46dd3f35c12', b'1', b'0', 1694112902369, 1694112902369);
INSERT INTO `thesis_student` VALUES (73, '7f08b37b-4a3f-4509-a0ac-ba8bcb1bfb4c', '55d03e5a-1a41-478d-bca5-7e5da4ddb73d', b'1', b'0', 1694115177561, 1694115177561);
INSERT INTO `thesis_student` VALUES (74, '7f08b37b-4a3f-4509-a0ac-ba8bcb1bfb4c', 'd28b3dc5-0fe4-4574-ad61-0786e1d49435', b'1', b'0', 1694115177565, 1694115177565);
INSERT INTO `thesis_student` VALUES (75, '6ce34fe2-3c2c-4398-9988-f64beeda0e96', '6036d7d9-3e8a-48f3-9659-bc5629e8f65b', b'1', b'0', 1694116207774, 1694116207774);
INSERT INTO `thesis_student` VALUES (76, '6ce34fe2-3c2c-4398-9988-f64beeda0e96', '903bd855-f01e-4cb4-b0ef-99f811e68e1e', b'1', b'0', 1694116207775, 1694116207775);
INSERT INTO `thesis_student` VALUES (77, '63893d42-920f-4240-bce1-8ef3584522ab', '536d42cf-1980-4679-9533-2be362efef9f', b'1', b'0', 1694125737754, 1694125737754);
INSERT INTO `thesis_student` VALUES (78, '63893d42-920f-4240-bce1-8ef3584522ab', '0f7d2151-210e-4720-9baf-e27540dc0178', b'1', b'0', 1694125737756, 1694125737756);
INSERT INTO `thesis_student` VALUES (79, '446ba792-5747-4e36-9000-1845b4e046c3', '6b498ec1-4390-4898-b344-8d73b5ad7980', b'1', b'0', 1694127310105, 1694127310105);
INSERT INTO `thesis_student` VALUES (80, '446ba792-5747-4e36-9000-1845b4e046c3', 'ee5fcb0f-a9dc-4b19-b600-ff76f9ea19b7', b'1', b'0', 1694127310105, 1694127310105);

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
  UNIQUE INDEX `unique_username`(`username` ASC) USING BTREE,
  INDEX `user_id`(`user_id` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('0001', 'admin', '$2a$10$9.NjSmXrhsb.GiQbwS2DNOxn8gwOGya5.Z.dQu0wtb4MT3/CrdGz6', '1', 'admin@admin', 'admin', '1983-05-01', 'CNTT', b'0', b'0', b'0', 0, 1694115689203);
INSERT INTO `user` VALUES ('0043eeef-d7e6-45f1-8102-c3ce8ab03ac5', '17130032', '$2a$10$UaUDviY8WTfqn1u7MFcdBuVJwyHcgUrgT0QDkP1vQi1RJdxOSHU62', 'male', '17130032@st.hcmuaf.edu.vn', 'Trương Quý Đức ', '1999-05-03', 'CNTT', b'1', b'0', b'0', 1694098089721, 1694098089721);
INSERT INTO `user` VALUES ('0662a9cc-1ece-4a49-aec3-4ab8a6147bf7', 'student9', '$2a$10$cWRJNVSswQWmPOf0xDCTQODG7KRic4nsK9NTn/VjlhF/3PNnO4eeW', 'male', 'student9@st.hcmuaf.edu.vn', 'Nhan Vương Ngọc Bảo', '1996-08-25', 'CNTT', b'1', b'0', b'0', 1694104260573, 1694104260573);
INSERT INTO `user` VALUES ('074937a2-0a68-4441-b0b8-785cea801fdc', 'student21', '$2a$10$wWFEY35HwvtKeSvGJlPNTu4Hsg0PpBmDWeXlWZNMI8kCKKiWBWA5y', 'female', 'student21@st.hcmuaf.vn', 'Lê Thị Thường', '1996-04-04', 'CNTT', b'1', b'0', b'0', 1694106979385, 1694106979385);
INSERT INTO `user` VALUES ('07a09cd1-cca4-4e5b-af3e-ce3acec31249', 'student1', '$2a$10$8ztQ7RDcKSlaQk46EOHtJ.tQzUhP96wkc2bl4CByCWeU9AwyrA8J6', 'female', 'student1@st.hcmuaf.edu.vn', 'TRẦN THỊ MỸ DUYÊN', '1999-08-21', 'CNTT', b'1', b'0', b'0', 1694100517904, 1694100517904);
INSERT INTO `user` VALUES ('0d257149-8b65-4727-bec5-9ec8b4c2e596', 'lecturer7', '$2a$10$hq4l/Ncbf021cqgcoCpDy.k9vwLUR.ZN3zCiQRMiloGEIlweL9PSm', 'male', 'lecturer7@gmail.com', 'Lê Phi Hùng', '1983-02-25', 'CNTT', b'0', b'1', b'0', 1694105409856, 1694105409856);
INSERT INTO `user` VALUES ('0f7d2151-210e-4720-9baf-e27540dc0178', 'std_test_2', '$2a$10$IYHowcfZQiUX8obVqkU1.eubeNWRGBZ5TBPhsScNu9AHAbBAcGpeO', 'male', 'std_test_2@gmail.com', 'std_test_2', '2000-05-10', 'CNTT', b'1', b'0', b'0', 1694125603267, 1694125603267);
INSERT INTO `user` VALUES ('113fbbed-893c-4acd-9e3c-b0b44e662a1a', 'studentTest2', '$2a$10$H3kzNO80kyXBJ7e0Qh9TGerf82pFWbfw8VsLZeqFt4z2lNb321NHC', 'male', 'studentTest2@gmail.com', 'studentTest2', '2023-09-19', 'CNTT', b'1', b'0', b'0', 1694110014836, 1694110014836);
INSERT INTO `user` VALUES ('14129268-4cb8-46dd-aaf4-aa0d40f901c6', '17130195', '$2a$10$5xREmDPpF7EEeAYr6SPMpuFx5JHlolRRWO1o9RVlRXfBqyqXKr4Nu', 'male', '17130195@st.hcmuaf.vn', 'Tô Huy Sơn', '1999-10-23', 'CNTT', b'1', b'0', b'0', 1694099634630, 1694099634630);
INSERT INTO `user` VALUES ('1d84f16e-f21e-43dd-8b21-61c357142d1d', 'lecturer2', '$2a$10$97r0fD93e4rcjlzeSEVXxePKe5Q3bDlm0myIv1PbqMClOma.myHZS', 'male', 'lecturer2@gmail.com', 'Phan Đình Long', '1979-11-30', 'CNTT', b'0', b'1', b'0', 1694099387970, 1694099387970);
INSERT INTO `user` VALUES ('1f3896cd-3dba-4804-917e-ef8adad6c4e8', '17130044', '$2a$10$5idsHFe0d9n/kmSh9MLpOeV/IlQe.vFRvduS0RiIKlpFdC/vczQ9S', 'female', '17130044@st.hcmuaf.edu.vn', 'Lăng Thị Mỹ Duyên', '1999-10-20', 'CNTT', b'1', b'0', b'0', 1694099722860, 1694099722860);
INSERT INTO `user` VALUES ('222d9c28-0ca5-40b1-8074-ffda86f65668', '16130671', '$2a$10$ya6JhO8a9LHsOT9D1IJ11OaqJtJ7lykPQrtiAeyp.ivbfg0QMSGw.', 'male', '16130671@st.hcmuaf.edu.vn', 'Nguyễn Hoàng Vũ', '1998-02-22', 'CNTT', b'1', b'0', b'0', 1694102855975, 1694102855975);
INSERT INTO `user` VALUES ('28aff2a7-3b8c-409e-a1e0-9fc04134993e', '17130276', '$2a$10$1Hi4/ECH1cVFwqBdW352sOik42T7GNwcioAN2KpZbcBEuVkcxfOKC', 'male', '17130276@st.hcmuaf.edu.vn', 'Cao Trung Vĩnh', '1999-06-05', 'CNTT', b'1', b'0', b'0', 1694100149190, 1694100149190);
INSERT INTO `user` VALUES ('28e4ecb6-500b-459a-b2b5-d87c3df92ca7', '17130273', '$2a$10$43uRb/WcI2lQznol0RITOutbcHMo.az2JshI.9J0mdXiQBsX2UvxO', 'male', '17130273@st.hcmuaf.edu.vn', 'Phạm Hoàng Việt', '1999-06-01', 'CNTT', b'1', b'0', b'0', 1694097860626, 1694097860626);
INSERT INTO `user` VALUES ('2b86e64f-fe12-490b-b3ed-d9dbf317aa5e', '16130490', '$2a$10$0wHNFuGKYh4DwGoOrPigkOiRIfFFxxWA2OrpAdtKKcSnfQTbWJ2ju', 'female', '16130490', 'Nguyễn Thị Thảo Nguyên', '1998-10-08', 'CNTT', b'1', b'0', b'0', 1694102951089, 1694102951089);
INSERT INTO `user` VALUES ('3191b1fb-1378-4b9a-bfd1-9cf7db7a0b6f', '15130198', '$2a$10$zO7ifhVsHF2iAU6Nu6cK9eMlBzILNitEEL4MdQyZ3U.n2FmIwRfQ6', 'male', '15130198@st.hcmuaf.edu.vn', 'Nguyễn Duy Toàn', '1997-03-30', 'CNTT', b'1', b'0', b'0', 1694106661705, 1694106661705);
INSERT INTO `user` VALUES ('39e7cf29-b50e-4de2-8601-3bb004221074', 'student_test_3', '$2a$10$V9e6/twsAIQy0H2p5./Yeuaz8y.XbpqVNfZ9RgZ37Kp6qWtZljgGS', 'male', 'student_test_3@gmail.com', 'student_test_3', '1999-05-19', 'CNTT', b'1', b'0', b'0', 1694113811411, 1694113811411);
INSERT INTO `user` VALUES ('3fad7e3d-7422-46f7-8c9a-5a36efa0fa0c', 'student4', '$2a$10$Ji6C0ABTyf4HjF2vjOg22e7LmCiwU92U0sjEi35WprQm5ZRFJKUYO', 'female', 'student4', 'Trần Thị Phương Thùy', '1997-09-07', 'CNTT', b'1', b'0', b'0', 1694102486863, 1694102486863);
INSERT INTO `user` VALUES ('431bba65-42e3-4be5-b201-bce3f31b8547', 'student7', '$2a$10$flgdIMB/d9p5hF1giGEdD.GfI20yT9jqoIP6epdyEgRiuvH08CJ.W', 'male', 'student7@st.hcmuaf.edu.vn', 'Trần Văn Dân', '1998-09-13', 'CNTT', b'1', b'0', b'0', 1694103558756, 1694103558756);
INSERT INTO `user` VALUES ('4d4f66fb-f84c-418f-9cd4-b43b4c46a0b7', '17130170', '$2a$10$p7A2DF9V5hwwxpx2wL8t/O.C9cL5rjsKXHnb6C2K7klqrrwhY28fu', 'female', '17130170@st.hcmuaf.edu.vn', 'Nguyễn Thị Thuý Phương', '1999-05-18', 'CNTT', b'1', b'0', b'0', 1694098769250, 1694098769250);
INSERT INTO `user` VALUES ('536d42cf-1980-4679-9533-2be362efef9f', 'std_test_1', '$2a$10$DvmEbCeRuSKAlYSzlpxPCOJl1WSukDwmksjxCmyAFpiYhjccGGuvG', 'male', 'std_test_1@gmail.com', 'std_test_1', '2000-05-17', 'CNTT', b'1', b'0', b'0', 1694125547205, 1694125547205);
INSERT INTO `user` VALUES ('55d03e5a-1a41-478d-bca5-7e5da4ddb73d', 'student_test_01', '$2a$10$wDu5FIXc6MW0nklGBi6uv.lHJMXX5/.ZKqKXaSQPSKowzjAvR1CyS', 'male', 'student_test_01@gmail.com', 'student_test_01', '1993-05-18', 'CNTT', b'1', b'0', b'0', 1694114994406, 1694114994406);
INSERT INTO `user` VALUES ('57c6ff2d-1732-4d2e-a67d-32dbe010b7e9', 'student14', '$2a$10$72nz1m/yQtY7G/bbDedY3e/.aQmuq/gGG24.UuznDNvZaaOxY4vP6', 'male', 'student14@st.hcmuaf.edu.vn', 'Đinh Thế Tân', '1996-11-12', 'CNTT', b'1', b'0', b'0', 1694105045728, 1694105045728);
INSERT INTO `user` VALUES ('59593072-4fbd-437c-af92-38a40556df66', 'student3', '$2a$10$0nCg3LNKGkP/fS8Va/kGx.heduhXhNhGB3Bu2Lh2yFt4VK85KsWyK', 'male', 'student3@st.hcmuaf.edu.vn', 'Vũ Đình Trường', '1997-02-12', 'CNTT', b'1', b'0', b'0', 1694102354201, 1694102354201);
INSERT INTO `user` VALUES ('5fd0dc1c-749a-45ec-a7f1-ed4e6531644c', 'student8', '$2a$10$ANiKkn30XuFjwXEcN5mGzuaqBjJRRb66jAsnP2mpgwl2PpM8RtIsa', 'female', 'student8@st.hcmuaf.edu.vn', 'Nguyễn Thị Hậu', '1998-05-28', 'CNTT', b'1', b'0', b'0', 1694103645829, 1694103645829);
INSERT INTO `user` VALUES ('6036d7d9-3e8a-48f3-9659-bc5629e8f65b', 'student_test_001', '$2a$10$zNi.Xur5pg5a7hedAi24nO8A/pobQMFWyTdiRC2quh8p9x.WWjX12', 'male', 'student_test_001@gmail.com', 'student_test_001', '2000-05-17', 'CNTT', b'1', b'0', b'0', 1694116030281, 1694116030281);
INSERT INTO `user` VALUES ('6199e140-7828-4941-855c-78e74eb0c41c', '16130670', '$2a$10$mhhw0pBF481GtSZi1r54KO6o5aWhnzq10Q3D6lXRgDDuZJgDSwX/O', 'male', '16130670@st.hcmuaf.edu.vn', 'Đoàn Bá Vũ', '1992-07-10', 'CNTT', b'1', b'0', b'0', 1694107481480, 1694107481480);
INSERT INTO `user` VALUES ('6753347b-4138-4ccc-bd0e-6865befbafba', '17130242', '$2a$10$j6zFQoRErvIg7iprgKatk.DdGJdvM/fdolq/dhNgfO2VuLovUxL9C', 'male', '17130242@st.hcmuaf.edu.vn', 'Đặng Minh Tiến', '1999-05-19', 'CNTT', b'1', b'0', b'0', 1694098646037, 1694098646037);
INSERT INTO `user` VALUES ('699f6ac7-93f5-4b48-b152-deddc78332dd', '16130514', '$2a$10$Xgyaa3VEiqGhd8jOctf.yeTzg9QlVTYJKP2nJ/4UELViA5ZviNuhi', 'male', '16130514@st.hcmuaf.edu.vn', 'Nguyễn Chí Phong', '1998-06-17', NULL, b'1', b'0', b'0', 1694103967355, 1694103967355);
INSERT INTO `user` VALUES ('6aa7e509-a475-4bb1-971f-0d523c63ccdd', '16130312', '$2a$10$Im0N/j6IRaJt9woCnG9blOgWAptCkp6uC/Uky.uYUdWQLseUbdKuG', 'male', '16130312@st.hcmuaf.vn', 'Đặng Văn Đa', '1998-03-17', 'CNTT', b'1', b'0', b'0', 1694107400210, 1694107400210);
INSERT INTO `user` VALUES ('6b498ec1-4390-4898-b344-8d73b5ad7980', 'std_test_01', '$2a$10$p3gv4og3iQ4PcLNGxkNjgeUELcIIO8FSXMHECREf/rkxoFhGkwBBu', 'male', 'std_test_01@gmail.com', 'std_test_01', '2000-05-17', 'CNTT', b'1', b'0', b'0', 1694127158247, 1694127158247);
INSERT INTO `user` VALUES ('6b7b17ee-8bed-411e-b3e0-e52bc822f76c', 'lecturer4', '$2a$10$GvK/aN3G/WVCj8j8pHfJV.DpvjhbPqPsU5stbT/.GkytSDfqUF5U.', 'female', 'lecturer4@gmail.com', 'Trần Thị Thanh Nga', '1989-07-06', 'CNTT', b'0', b'1', b'0', 1694102017293, 1694102017293);
INSERT INTO `user` VALUES ('6d6e29c9-f4d0-4fdb-8dc9-0eb58ce91158', '16130452', '$2a$10$eCUCHYOHacNo7ze0lcs0GuV2cr62NRXT5i9FlNBgrJ.I3YO7x/HEe', 'male', '16130452@st.hcmuaf.edu.vn', 'Nguyễn Tấn Lực', '1998-04-16', 'CNTT', b'1', b'0', b'0', 1694105909048, 1694105909048);
INSERT INTO `user` VALUES ('6ea99057-f64d-406b-a126-287f3e31954c', '17130264', '$2a$10$0qpDWw0j7wOv7SpN3hi5wuxv6FQxAHbuwYv6c1U4CIZ9cu2kJVLUy', 'male', '17130264', 'Đào Thanh Tùng', '1999-12-03', 'CNTT', b'1', b'0', b'0', 1694101514576, 1694101514576);
INSERT INTO `user` VALUES ('732a8744-6a63-4d1f-94c3-363129a27823', 'student12', '$2a$10$jwMp.jz8neEeq7pfVDubou.X6F7QtJ8MwMecbgZ6bIqeXgTQNyC62', 'female', 'student12@st.hcmuaf.edu.vn', 'Phạm Thị Ngọc Thư', '1994-11-23', 'CNTT', b'1', b'0', b'0', 1694104794772, 1694104794772);
INSERT INTO `user` VALUES ('773ed4fc-4bed-44f5-8eda-4830518b95d7', 'student2', '$2a$10$0okJ.jfgTBcZoomC6p55/.wgd3.qgjy9txLIM83Rp8hGLyfY5dT5e', 'male', 'student2@st.hcmuaf.edu.vn', 'LƯƠNG TRUNG THÀNH', '1999-04-06', 'CNTT', b'1', b'0', b'0', 1694100602506, 1694100602506);
INSERT INTO `user` VALUES ('78f769c8-425f-4438-ba59-0ed7fb6c6f79', '16130388', '$2a$10$X3lkMwsYbKWYFKVqhoQhQe9Oom17/r3OcjSCnU6YYLBMoHli2fRPy', 'male', '16130388@st.hcmuaf.edu.vn', 'Nguyễn Thương Hoài', '1992-09-02', 'CNTT', b'1', b'0', b'0', 1694106209388, 1694106209388);
INSERT INTO `user` VALUES ('7fc22c12-fa54-4986-b44e-3365be36f800', 'Student10', '$2a$10$q4CC3qMv.OGpjpIXAd0tuO5WK8Y8EcnV89UlBVBwL6Xm1lH7r49Ra', 'male', 'Student10@st.hcmuaf.edu.vn', 'Đỗ Nguyên Tú', '1996-09-24', 'CNTT', b'1', b'0', b'0', 1694104334600, 1694104334600);
INSERT INTO `user` VALUES ('8cfb4971-b8a2-4741-b0f3-6b7a654f09da', 'student18', '$2a$10$nUTu5O0KZd2Evj3gp.Ujne42VIHko8/94ebDH1zzZwCGE9o5aBI36', 'male', 'student18@st.hcmuaf.edu.vn', 'Tô Thanh Sang', '1998-12-23', 'CNTT', b'1', b'0', b'0', 1694105617009, 1694105617009);
INSERT INTO `user` VALUES ('900af0a8-464e-408c-b7e1-9cef9ee64902', '16130442', '$2a$10$79PcNdcUkIcQIv12FZFOK.0.hCSkq7u5GJoav314RAZggCEbtnegO', 'male', '16130442@st.hcmuaf.edu.vn', 'Phạm Văn Linh', '1998-12-12', 'CNTT', b'1', b'0', b'0', 1694106273721, 1694106273721);
INSERT INTO `user` VALUES ('903bd855-f01e-4cb4-b0ef-99f811e68e1e', 'student_test_002', '$2a$10$CJlRINDoiLP/OHezoZSjKuIHZNHE29LiGSpCvZKvX6qeth4oR6UV6', 'male', 'student_test_002@gmail.com', 'student_test_002', '2000-05-03', 'CNTT', b'1', b'0', b'0', 1694116072480, 1694116072480);
INSERT INTO `user` VALUES ('94366443-58c3-479c-bb11-9bdfd7e540b1', 'student13', '$2a$10$2/XAcOjtDbtUN9tmQ4QXceNy2R8AmcqFDxdeYGDUP8geNVxjA3i8i', 'male', 'student13@st.hcmuaf.edu.vn', 'Hồ Lâm Lai', '1996-10-02', 'CNTT', b'1', b'0', b'0', 1694104959043, 1694104959043);
INSERT INTO `user` VALUES ('94382753-88a7-4c56-87a1-f89a6ec29edb', 'lecturer6', '$2a$10$COttGRSxOH5aLzH6mB1W4esUyvuwkxGzqH4pfP48BwrnnTF7H39oy', 'male', 'lecturer6@gmail.com', 'Trần Huy Cường', '1977-02-09', 'CNTT', b'0', b'1', b'0', 1694104431177, 1694104431177);
INSERT INTO `user` VALUES ('9cdca43b-6d5c-46ad-a2bf-01b0b879f20d', '17130135', '$2a$10$hvC.2aBCdvpAtEFfLkUTReBMaaYzOmU.uuRP4sqBLes2CQ/.X3h2O', 'male', '17130135@st.hcmuaf.edu.vn', 'Nguyễn Trọng Nghĩa', '1999-04-23', 'CNTT', b'1', b'0', b'0', 1694101887922, 1694101887922);
INSERT INTO `user` VALUES ('9dfa3f6b-d9db-4edd-b203-3f503f86cee7', 'leturer1', '$2a$10$Wd6ctni9f3PsJVfYxTckLeoNV0VYQP8a5NN1YK4TvK1gs.wBBnwV6', 'male', 'leturer1@gmail.com', 'Nguyễn Văn Dũ', '1980-05-20', 'CNTT', b'0', b'1', b'0', 1694098221682, 1694098221682);
INSERT INTO `user` VALUES ('9eb9e30f-128d-487d-858c-b06bb10d9d81', '16130326', '$2a$10$3eo8gwbQPvbrUs6V5Jqrcu7qHmKDAMq37O03q8tLqEMABGDzSaYyO', 'male', '16130326@st.hcmuaf.edu.vn', 'Trần Thanh Điền', '1998-08-25', 'CNTT', b'1', b'0', b'0', 1694103870815, 1694103870815);
INSERT INTO `user` VALUES ('9ef47ebf-6b39-4d60-86c7-cc56e284c4d6', 'lecterer9', '$2a$10$Xt.QDyHsyBB7h3OROiUE1uyjC3T3i8Hjvfm4EIYEfBI05lPSxEgSK', 'male', 'lecterer9@gmail.com', 'Khương Hải Châu', '1980-02-27', 'CNTT', b'0', b'1', b'0', 1694107183355, 1694107183355);
INSERT INTO `user` VALUES ('b345b277-74e0-45af-a14e-d1dbd62a7d5f', 'student_test_1', '$2a$10$TmOxRuXwNg/fxtjqutHg2uUgg9OCRGzzMXzVNtk8.xmVSaqzmmsna', 'male', 'student_test_1@gmail.com', 'student_test_1', '2001-02-08', 'CNTT', b'1', b'0', b'0', 1694112741464, 1694112741464);
INSERT INTO `user` VALUES ('b825fdb5-318e-4a0e-8c35-d8d49d40ec22', '15130132', '$2a$10$El.fgBpsh756TW8N0HZZPOulBnGBTGvqHSaoEOmRiEAne17Kj6vc2', 'male', '15130132@st.hcmuaf.edu.vn', 'Nguyễn Tấn Nhựt', '1997-06-16', 'CNTT', b'1', b'0', b'0', 1694106588119, 1694106588119);
INSERT INTO `user` VALUES ('bc1adb23-9016-4de7-b72c-d1ec0ede7e3b', '17130010', '$2a$10$WIJIonKKKqOj4RZUZ5NfPufEYH4mltby2S3cZSwQwx3WNZ1wzF2q.', 'male', '17130010@st.hcmuaf.edu.vn', 'Nguyễn Như Bảo', '1999-05-21', 'CNTT', b'1', b'0', b'0', 1694099032005, 1694099032005);
INSERT INTO `user` VALUES ('bccdc228-cb42-4c33-bc38-dfeff8f6dee3', '16130606', '$2a$10$rVt3jUvEzKJQ9HDqPvln4eMSCQchS23H9nDoGQUzmfEzUd/uy04TG', 'male', '16130606', 'Lê Văn Thuận', '1998-07-27', 'CNTt', b'1', b'0', b'0', 1694103253980, 1694103253980);
INSERT INTO `user` VALUES ('c77baa26-4ed6-4cad-8b0d-4977e4604592', 'student16', '$2a$10$G5KTAe1MVKPtjtWI6G1UAe0UtDWZzEGWDxOwRPMPMzmSm71ITSPFK', 'male', 'student16@st.hcmuaf.edu.vn', 'Nguyễn Xuân Quốc', '1995-06-17', 'CNTT', b'1', b'0', b'0', 1694105311314, 1694105311314);
INSERT INTO `user` VALUES ('cb918cee-0f79-4abd-b78e-915971e63b8e', 'student19', '$2a$10$MJEQIrwwcciOZy5UhfLxUO2H5eBHOWMbogr9.h455oY.OhAnUsRVq', 'male', 'student19@st.hcmuaf.edu.vn', 'Nguyễn Hiếu', '1998-01-10', 'CNTT', b'1', b'0', b'0', 1694105700964, 1694105700964);
INSERT INTO `user` VALUES ('cda92fcb-04fd-438b-a9f7-bf321b54197e', 'lecturer3', '$2a$10$iHxvVk8n77Uny4AWMPtQ0.Rrt8sc4Fegh3rrDG2L1SBmU/VmfgkoC', 'male', 'lecturer3@gmail.com', 'NGUYỄN ĐỨC CÔNG SONG', '1986-01-11', 'CNTT', b'0', b'1', b'0', 1694100790009, 1694100790009);
INSERT INTO `user` VALUES ('ce7a0609-18af-46da-b3c8-d96056445ec5', 'student11', '$2a$10$fHDWcLro7d8F68rpU1Qbv.Vli/wWn1VDOQENXFpdJviB7LIBLnm.S', 'male', 'student11@st.hcmuaf.edu.vn', 'Nguyễn Trung Hải', '1994-01-03', 'CNTT', b'1', b'0', b'0', 1694104656429, 1694104656429);
INSERT INTO `user` VALUES ('ceb3533b-931a-429b-828a-3b3c4152463c', '17130059', '$2a$10$uGz7KHFn4on5vIaHV228keP4edYiQLzGdruEe7X5gJmWF8A6GAu26', 'male', '17130059@st.hcmuaf.edu.vn', 'Trần Thanh Hậu ', '1999-10-19', 'CNTT', b'1', b'0', b'0', 1694101308600, 1694101308600);
INSERT INTO `user` VALUES ('cf5ad10c-3077-4883-93c9-b46dd3f35c12', 'student_test_2', '$2a$10$XBQOtClaDzuzt0IaVAafCeYc2S8YTf5iMwzluf.gUxzkPIjMcXkc6', 'male', 'student_test_2@st.hcmuaf.edu.vn', 'student_test_2', '2001-05-22', 'CNTT', b'1', b'0', b'0', 1694112788472, 1694112788472);
INSERT INTO `user` VALUES ('d195b534-33df-4238-8b20-d7d81892da25', 'lecturer5', '$2a$10$Sq5d7ystnTCIaLrXj6GakOYYwbf1oyW4qBT6zXZD3IGhWxq0ncZ7S', 'female', 'lecturer5@gmail.com', 'Nguyễn Thị Phương Trâm', '1981-05-06', 'CNTT', b'0', b'1', b'0', 1694102566488, 1694102566488);
INSERT INTO `user` VALUES ('d28b3dc5-0fe4-4574-ad61-0786e1d49435', 'student_test_02', '$2a$10$LSTz2vZZ6vynKDyGR9Wso.M.SnqeI1hl5gjAKLXWuaJs2aJ0Y.Zk6', 'male', 'student_test_02@gmail.com', 'student_test_02', '1999-05-12', 'CNTT', b'1', b'0', b'0', 1694115055526, 1694115055526);
INSERT INTO `user` VALUES ('d880f951-8bfb-4867-a438-2a556398a166', '17130016', '$2a$10$l3eAZixlPHPmgzbNI6Yvn.1NEg8yWKWQs8.8QNHJQgfV1nAEnHqhi', 'male', '17130016@st.hcmuaf.edu.vn', 'Nguyễn Việt Chương', '1998-06-20', 'CNTT', b'1', b'0', b'0', 1694100041191, 1694100041191);
INSERT INTO `user` VALUES ('da163727-97e4-4cff-9137-bddb030dab09', 'studentTest1', '$2a$10$7mGThBHHyJdaEecsiEkPuurQ.c2E8aZ5lIlRV.PeWxvfPDAw8L1c6', 'male', 'studentTest1@gmail.com', 'studentTest1', '2023-09-05', 'CNTT', b'1', b'0', b'0', 1694109973619, 1694109973619);
INSERT INTO `user` VALUES ('db8cd058-19d5-4bb8-84cd-8f8927aed99b', ' 17130061', '$2a$10$/09CCGNqRUESjqg186wsXOWMiWhMz8wvAxqiQVKE7esLmPdlpHCtG', 'male', '17130061@st.hcmuaf.edu.vn', 'Nguyễn Thanh Hiền', '1999-12-10', 'CNTT', b'1', b'0', b'0', 1694101799231, 1694101799231);
INSERT INTO `user` VALUES ('e19d57ff-5089-49ad-9be2-f4e8d1440903', '16130529', '$2a$10$FO6r0n3OgLXPDqgyUMs5bOy.Aq8hFXxxrA8zNMLCqX7adwfsTPmwC', 'male', '16130529@st.hcmuaf.edu.vn', 'Nguyễn Văn Quang', '1998-07-27', 'CNTT', b'1', b'0', b'0', 1694103194055, 1694103194055);
INSERT INTO `user` VALUES ('e2e7ade3-4747-4013-8c51-0ff1f2d2b0ad', 'student_test_5', '$2a$10$pwVMlB0Nyqlx6ohwatlfmeFiOkVO5QgHuHRdeQrb2dTU7kb2aWn/q', 'male', 'student_test_5@gmail.com', 'student_test_5', '2023-09-08', 'CNTT', b'1', b'0', b'0', 1694113874788, 1694113874788);
INSERT INTO `user` VALUES ('ea198a7a-fb0b-4a35-a465-60aff2f834a1', '17130208', '$2a$10$dtDj2v1ncFqtGSRj84OYKeN7q9.o.VkvQKp3NyJeIGeL6uWp0lCty', 'male', '17130208@st.hcmuaf.edu.vn', 'Nguyễn Văn Tánh', '1998-05-14', 'CNTT', b'1', b'0', b'0', 1694099167344, 1694099167344);
INSERT INTO `user` VALUES ('ee5fcb0f-a9dc-4b19-b600-ff76f9ea19b7', 'std_test_02', '$2a$10$WMirtWugads.Isxo6MxJ8uu55MkGZ4YbbKLNiJmIKaJxfywt1Soca', 'male', 'std_test_02@gmail.com', 'std_test_02', '2000-05-10', 'CNTT', b'1', b'0', b'0', 1694127208422, 1694127208422);
INSERT INTO `user` VALUES ('f97ed062-bec3-4b37-93b8-f3d521b1c931', '16130334', '$2a$10$UIJlPHJ1ArmPjplzgd7Tse/MyTeVU2efEgSYaoNQpUO9ZREt0zWam', 'male', '16130334@st.hcmuaf.edu.vn', 'Nguyễn Phước Đức', '1998-01-16', 'CNTT', b'1', b'0', b'0', 1694105983857, 1694105983857);
INSERT INTO `user` VALUES ('fb86a739-fa4b-41b4-9a7e-ec0f622dc9e9', 'student20', '$2a$10$hkcVeYtgtwXbyPGXXX4VW.MMYfokU756aldzIVXMGeZ8ztKN.0.aS', 'male', 'student20@st.hcmuaf.edu.vn', 'Đặng Minh Phú Vinh', '1996-09-22', 'CNTT', b'1', b'0', b'0', 1694106902105, 1694106902105);
INSERT INTO `user` VALUES ('fd65eb74-4db4-4c6a-9c89-04bf90360914', 'student15', '$2a$10$ldjZSgsCcc/fjnFfrzROG.4lJc4CCREsPii3ElSIseBXHG.5FkoH2', 'female', 'student15@st.hcmuaf.edu.vn', 'Huỳnh Thảo Trang', '1996-11-21', 'CNTT', b'1', b'0', b'0', 1694105227544, 1694105227544);

SET FOREIGN_KEY_CHECKS = 1;
