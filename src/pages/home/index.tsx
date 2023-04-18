import { Button } from '@mui/material';
import { PageHeader, Wrapper } from '../../components';
import ListTable from '../../elements/table';
import './index.scss';

const Home = () => {
    const headerData = [
        'category',
        'startDate',
        'endDate',
        'days',
        'comments',
        'appliedDate',
        'approver',
    ];
    const tableData = [
        {
            category: 'string',
            startDate: 'string',
            endDate: 'string',
            days: 'string',
            comments: 'string',
            appliedDate: 'string',
            approver: 'string',
        },
        {
            category: 'string',
            startDate: 'string',
            endDate: 'string',
            days: 'string',
            comments: 'string',
            appliedDate: 'string',
            approver: 'string',
        },
        {
            category: 'string',
            startDate: 'string',
            endDate: 'string',
            days: 'string',
            comments: 'string',
            appliedDate: 'string',
            approver: 'string',
        },
        {
            category: 'string',
            startDate: 'string',
            endDate: 'string',
            days: 'string',
            comments: 'string',
            appliedDate: 'string',
            approver: 'string',
        },
        {
            category: 'string',
            startDate: 'string',
            endDate: 'string',
            days: 'string',
            comments: 'string',
            appliedDate: 'string',
            approver: 'string',
        },
        {
            category: 'string',
            startDate: 'string',
            endDate: 'string',
            days: 'string',
            comments: 'string',
            appliedDate: 'string',
            approver: 'string',
        },
        {
            category: 'string',
            startDate: 'string',
            endDate: 'string',
            days: 'string',
            comments: 'string',
            appliedDate: 'string',
            approver: 'string',
        },
        {
            category: 'string',
            startDate: 'string',
            endDate: 'string',
            days: 'string',
            comments: 'string',
            appliedDate: 'string',
            approver: 'string',
        },
        {
            category: 'string',
            startDate: 'string',
            endDate: 'string',
            days: 'string',
            comments: 'string',
            appliedDate: 'string',
            approver: 'string',
        },
        {
            category: 'string',
            startDate: 'string',
            endDate: 'string',
            days: 'string',
            comments: 'string',
            appliedDate: 'string',
            approver: 'string',
        },
        {
            category: 'string',
            startDate: 'string',
            endDate: 'string',
            days: 'string',
            comments: 'string',
            appliedDate: 'string',
            approver: 'string',
        },
        {
            category: 'string',
            startDate: 'string',
            endDate: 'string',
            days: 'string',
            comments: 'string',
            appliedDate: 'string',
            approver: 'string',
        },
        {
            category: 'string',
            startDate: 'string',
            endDate: 'string',
            days: 'string',
            comments: 'string',
            appliedDate: 'string',
            approver: 'string',
        },
        {
            category: 'string',
            startDate: 'string',
            endDate: 'string',
            days: 'string',
            comments: 'string',
            appliedDate: 'string',
            approver: 'string',
        },
    ];
    return (
        <div className="home">
            <Wrapper>
                <PageHeader
                    header="Invoice"
                    breadcrumbs={['Home', 'Invoice']}
                />
                <Button variant="contained">Add Invoice</Button>
                <br />
                <br />
                <ListTable header={headerData} data={tableData} />
            </Wrapper>
        </div>
    );
};

export default Home;
