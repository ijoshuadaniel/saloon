import './index.scss';

interface PageHeader {
    header: string;
    breadcrumbs: Array<string>;
}

const PageHeader = ({ header, breadcrumbs }: PageHeader) => {
    return (
        <div className="pageHeader">
            <h3>{header}</h3>
            <div>
                {breadcrumbs.map((text, i) => {
                    const t =
                        i === breadcrumbs.length - 1 ? text : text + ' / ';
                    return <span key={i}>{t} </span>;
                })}
            </div>
        </div>
    );
};

export default PageHeader;
