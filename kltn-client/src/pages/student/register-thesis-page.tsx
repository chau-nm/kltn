import Layout from "antd/es/layout/layout";
import PageHeader from "~/components/common/PageHeader";
import RegisterThesisForm from "~/components/register-thesis-page.tsx/RegisterThesisForm";

const RegisterThesisPage = () : JSX.Element => {
    return (
        <Layout className="bg-white mt-2 p-3 shadow rounded">
            <PageHeader title="Đăng ký khóa luận tốt nghiệp" />
            <RegisterThesisForm />
        </Layout>
    )
}

export default RegisterThesisPage;