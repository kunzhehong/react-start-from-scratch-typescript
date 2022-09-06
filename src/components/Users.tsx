import React from 'react';
import { Table } from 'reactstrap';
import { UserList } from '../data/UserList';

export function Users() {
    let userData = UserList.map((item, index)=>
    {
        if (index < 10)
        {
            return <tr><th scope='row'>{index + 1}</th><td>{item.title}</td></tr>
        }
    })
    return (
        <>
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
        </>
    );
}

