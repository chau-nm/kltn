class CommonConstants {
  public static readonly THESIS_STATUS = [
    { value: -1, text: "Đã hủy" },
    { value: 1, text: "Đang đợi người tham gia xác nhận" },
    { value: 2, text: "Đã xác nhận tham gia" },
    { value: 3, text: "Đang đánh giá đề cương" },
    { value: 4, text: "Đang thực hiện" },
    { value: 5, text: "Đang phản biện" },
    { value: 6, text: "Đã phản biện" },
    { value: 7, text: "Đang bảo vệ" },
    { value: 8, text: "Đã bảo vệ" },
    { value: 9, text: "Đã hoàn thành" },
  ];

  public static readonly REVIEWER_SUGGESTIONS = [
    "",
    "Được bảo vệ",
    "Bổ sung thêm để bảo vệ",
    "Không được bảo vệ",
    "Bảo vệ đợt khác"
  ]
}

export default CommonConstants;
