import { EditOutlined } from "@ant-design/icons";
import { Space, Table } from "antd";
import { ColumnProps } from "antd/es/table";
import dayjs from "dayjs";
import { toHoursAndMinutes } from "~/utils/util";

const columns: ColumnProps<ReportScheduleModel>[] = [
  {
    title: "Đề tài",
    render: (text, record, index) => {
      return (
        <span>
          <strong className="text-lg">{record.topic}</strong>
        </span>
      );
    },
  },
  {
    title: "Thời gian",
    render: (text, record, index) => {
      return <span>{dayjs(record.time).format("DD-MM-YYYY HH:mm:ss")}</span>;
    },
  },
  {
    title: "Thời lượng",
    render: (text, record, index) => {
      const { duration } = record;

      const time = toHoursAndMinutes(duration);

      return (
        <span>
          {time.h} giờ {time.m} phút {time.s} giây
        </span>
      );
    },
  },
  {
    title: "Trạng thái",
    render: (text, record, index) => {
      return (
        <span>{record.status}</span>
      );
    },
  },
  {
    title: "Phòng",
    dataIndex: "room",
  },
  {
    title: "",
    render: () => {
      return (
        <>
          <EditOutlined className="p-2 border rounded-xl mx-1 cursor-pointer" />
        </>
      );
    },
  },
];

const datas: ReportScheduleModel[] = [
  {
    id: "0001",
    topic: "Xây dựng website khóa luận tốt nghiệp",
    duration: 10000,
    time: new Date(),
    room: "RD300",
    status: "Đang tiến hành"
  },
];

const ScheduleList = (): JSX.Element => {
  return <Table columns={columns} dataSource={datas} />;
};

export default ScheduleList;
