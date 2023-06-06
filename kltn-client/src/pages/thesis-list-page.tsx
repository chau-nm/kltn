import { Button, Space, message, Input, DatePicker, Table } from "antd";
import { UserOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";
import PageLayout from "~/components/common/PageLayout";

const { Search } = Input;
const { RangePicker } = DatePicker;

interface DataType {
  key: string;
  imageSrc: string;
  title: string;
  timeStart: Date;
  timeEnd: Date;
  numMember: number;
}

const columns: ColumnsType<DataType> = [
  // {
  //   title: "Image",
  //   dataIndex: "imageSrc",
  //   key: "image",
  //   render: (text) => <Image src={text} width={40}></Image>,
  // },
  {
    title: "Đề tài",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Thời gian bắt đầu",
    dataIndex: "timeStart",
    key: "timeStart",
    render: (date) => date.toLocaleDateString(),
  },
  {
    title: "Thời gian kết thúc",
    dataIndex: "timeEnd",
    key: "timeEnd",
    render: (date) => date.toLocaleDateString(),
  },
  {
    title: "Số thành viên",
    key: "numMember",
    dataIndex: "numMember",
  },
  {
    title: "",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <EditOutlined style={{ fontSize: "20px", color: "green" }} />
        <DeleteOutlined style={{ fontSize: "20px", color: "red" }} />
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    imageSrc:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    title: "Xây dựng hệ thống quản lý quá trình thực hiện luận văn tốt nghiệp",
    timeStart: new Date("01/12/2022"),
    timeEnd: new Date("01/12/2022"),
    numMember: 2,
  },
  {
    key: "2",
    imageSrc:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    title: "Xây dựng hệ thống quản lý quá trình thực hiện luận văn tốt nghiệp",
    timeStart: new Date("01/12/2022"),
    timeEnd: new Date("01/12/2022"),
    numMember: 2,
  },
  {
    key: "3",
    imageSrc:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    title: "Xây dựng hệ thống quản lý quá trình thực hiện luận văn tốt nghiệp",
    timeStart: new Date("01/12/2022"),
    timeEnd: new Date("01/12/2022"),
    numMember: 2,
  },
  {
    key: "4",
    imageSrc:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    title: "Xây dựng hệ thống quản lý quá trình thực hiện luận văn tốt nghiệp",
    timeStart: new Date("01/12/2022"),
    timeEnd: new Date("01/12/2022"),
    numMember: 2,
  },
  {
    key: "5",
    imageSrc:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    title: "Xây dựng hệ thống quản lý quá trình thực hiện luận văn tốt nghiệp",
    timeStart: new Date("01/12/2022"),
    timeEnd: new Date("01/12/2022"),
    numMember: 2,
  },
  {
    key: "6",
    imageSrc:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    title: "Xây dựng hệ thống quản lý quá trình thực hiện luận văn tốt nghiệp",
    timeStart: new Date("01/12/2022"),
    timeEnd: new Date("01/12/2022"),
    numMember: 2,
  },
];

const ThesisListPage = (): JSX.Element => {
  const onChange = (
    value: DatePickerProps["value"] | RangePickerProps["value"],
    dateString: [string, string] | string
  ) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };

  const onOk = (
    value: DatePickerProps["value"] | RangePickerProps["value"]
  ) => {
    console.log("onOk: ", value);
  };
  return (
    <PageLayout pageTitle="Danh sách luận văn" showTitle>
      <div className="bg-white h-full flex justify-around items-center flex-col p-2 mt-2 ml-2">
        <div className="w-full h-14 flex justify-around items-center bg-slate-100 mb-7">
          <div className="w-3/4 flex justify-around items-center">
            {/* <div>
            <Dropdown menu={menuProps}>
              <Button>
                <Space>
                  Xếp theo ngày
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </div>
          <div>
            <Dropdown menu={menuProps}>
              <Button>
                <Space>
                  Xếp theo điểm
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </div> */}
            <div className="flex items-center justify-around  w-2/3">
              <span className="w-2/7">Bộ lọc ngày: </span>
              <RangePicker
                showTime={{ format: "HH:mm" }}
                format="YYYY-MM-DD HH:mm"
                onChange={onChange}
                onOk={onOk}
              />
            </div>
          </div>
          <div>
            <Search
              placeholder="tìm tiếm theo tên"
              allowClear
              onSearch={() => {}}
              style={{ width: 200 }}
            />
          </div>
        </div>

        <div className="content w-full h-4/5 flex flex-col justify-between">
          <Table
            columns={columns}
            dataSource={data}
            pagination={{
              position: ["bottomCenter"],
              pageSize: 4,
            }}
          />
        </div>
        <div className="account-footer w-full h-5 flex justify-end items-center p-5">
          <Button>Thêm luận văn</Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default ThesisListPage;
