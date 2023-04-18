import { useEffect, useState } from 'react';
import './index.scss';

interface tableData {
    category: string;
    startDate: string;
    endDate: string;
    days: string;
    comments: string;
    appliedDate: string;
    approver: string;
}

interface listTable {
    header: string[];
    data: tableData[];
}

const ListTable = ({ header, data }: listTable) => {
    const [showPagination, setShowPagination] = useState(false);
    const [pageLength, setPageLength] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [listdata, setListdata] = useState(data);
    const tableLimit = 10;

    useEffect(() => {
        const pages = Math.ceil(data.length / tableLimit);
        if (pages > 1) {
            setShowPagination(true);
            setPageLength(pages);
            if (currentPage === 1) {
                const paginatedData: any = [];
                for (let i = 0; i <= currentPage * tableLimit - 1; i++) {
                    paginatedData.push(data[i]);
                }
                setListdata(paginatedData);
            } else {
                changePage(currentPage);
            }
        }
    }, [data, currentPage]);

    const changePage = (pageNum: number) => {
        setCurrentPage(pageNum);
        const paginatedData: any = [];
        const start = pageNum === 1 ? 0 : pageNum * tableLimit - tableLimit;
        const limit = start === 0 ? 9 : pageNum * tableLimit - 1;
        for (let i = start; i <= limit; i++) {
            if (data[i]) {
                paginatedData.push(data[i]);
            }
        }
        setListdata(paginatedData);
    };

    const renderPagination = () => {
        const element = [];
        for (let i = 0; i < pageLength; i++) {
            element.push(
                <span
                    className={`listTable-No ${
                        currentPage === i + 1 ? 'selected' : ''
                    }`}
                    onClick={() => changePage(i + 1)}
                >
                    {i + 1}
                </span>
            );
        }
        return element;
    };

    console.log(listdata, data);

    return (
        <div className="listTable">
            <table>
                <thead>
                    <tr>
                        {header.map((head, i) => (
                            <th key={i}>{head}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {listdata.map((row: any, i) => (
                        <tr key={i}>
                            <td>{row.category}</td>
                            <td>{row.startDate}</td>
                            <td>{row.endDate}</td>
                            <td>{row.days}</td>
                            <td>{row.comments}</td>
                            <td>{row.appliedDate}</td>
                            <td>{row.approver}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showPagination && (
                <div className="listTable-pagination">
                    {currentPage !== 1 && (
                        <span
                            className="listTable-pagination-button"
                            onClick={() => changePage(currentPage - 1)}
                        >
                            Previous
                        </span>
                    )}
                    {renderPagination().map((d, i) => (
                        <span key={i}>{d}</span>
                    ))}
                    {currentPage !== pageLength && (
                        <span
                            className="listTable-pagination-button"
                            onClick={() => changePage(currentPage + 1)}
                        >
                            Next
                        </span>
                    )}
                </div>
            )}
        </div>
    );
};

export default ListTable;
