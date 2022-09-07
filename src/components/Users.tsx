import React, { useState } from 'react';
import { Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { UserList } from '../data/UserList';

// Next target: 1. Abstract table and pagination feature  2. Import Axios to fetch data
export function Users() {
    const [pageIndex, setCurrentPage] = useState(1)

    let userData = UserList.slice((pageIndex - 1) * 10, pageIndex * 10).map((item, index) => {
        // To get range of array items, Use array.slice(start: int, end: int)        
        return <tr key={index}><th scope='row'>{index + 1}</th><td>{item.title}</td></tr>
    })

    // downlevelIteration: [...Array(10).keys()].map((index)=> ++index )
    let span: number = Math.floor(UserList.length / 10) + 1
    let pageList = Array.from(Array(span).keys()).map((i) => {
        ++i
        return <PaginationItem key={i}><PaginationLink onClick={() => setCurrentPage(pre => pre = i)}>{i}</PaginationLink></PaginationItem>
    })

    console.log(pageList)

    return (
        <>
            records length: {UserList.length}
            <br />
            Current Page: {pageIndex}
            <Table>
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            Username
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {userData}
                </tbody>
            </Table>
            <Pagination>
                <PaginationItem>
                    <PaginationLink onClick={() => setCurrentPage(pre => pre = 1)}>
                        &#60;&#60;
                    </PaginationLink>
                </PaginationItem>
                {pageList}
                <PaginationItem>
                    <PaginationLink onClick={() => setCurrentPage(pre => pre = span)}>
                        &#62;&#62;
                    </PaginationLink></PaginationItem>
            </Pagination>
        </>
    );
}

