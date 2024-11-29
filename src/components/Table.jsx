import React from 'react';
import SourceCodeContainer from './SourceCodeContainer';
import './Table.css';

export default function Heading() {
    const sourceCode = {
        html: `
    <div className="table">
        <table className="simple_table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Laptop</td>
                    <td>$1200</td>
                    <td>Available</td>
                </tr>
                <tr>
                    <td>Smartphone</td>
                    <td>$800</td>
                    <td>Out of Stock</td>
                </tr>
                <tr>
                    <td>Headphones</td>
                    <td>$150</td>
                    <td>Available</td>
                </tr>
            </tbody>
        </table>
    
        <table className="simple_table">
            <thead>
                <tr>
                    <th>Course</th>
                    <th>Duration</th>
                    <th>Instructor</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Web Development</td>
                    <td>6 Months</td>
                    <td>John Doe</td>
                </tr>
                <tr>
                    <td>Data Science</td>
                    <td>4 Months</td>
                    <td>Jane Smith</td>
                </tr>
                <tr>
                    <td>AI & Machine Learning</td>
                    <td>8 Months</td>
                    <td>Ali Khan</td>
                </tr>
            </tbody>
        </table>
    </div>
        `,
        css: `
    .table {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px;
        justify-content: center;
        align-items: center;
    }
    
    .simple_table {
        width: 90%;
        border-collapse: collapse;
        margin: 10px 0;
        font-size: 16px;
        text-align: left;
        background-color: #f9f9f9;
        border: 1px solid #ddd;
        border-radius: 8px;
        overflow: hidden;
    }
    
    .simple_table thead tr {
        background-color: green;
        color: white;
        font-weight: bold;
    }
    
    .simple_table th, .simple_table td {
        padding: 12px;
        border: 1px solid #ddd;
    }
    
    .simple_table tbody tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    
    .simple_table tbody tr:hover {
        background-color: #ddd;
        transition: background-color 0.3s ease;
    }
    
    .simple_table th {
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
        `
    };

    return (
        <SourceCodeContainer sourceCode={sourceCode}>
            <div className="table">
                <table className="simple_table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Laptop</td>
                            <td>$1200</td>
                            <td>Available</td>
                        </tr>
                        <tr>
                            <td>Smartphone</td>
                            <td>$800</td>
                            <td>Out of Stock</td>
                        </tr>
                        <tr>
                            <td>Headphones</td>
                            <td>$150</td>
                            <td>Available</td>
                        </tr>
                    </tbody>
                </table>

                <table className="simple_table">
                    <thead>
                        <tr>
                            <th>Course</th>
                            <th>Duration</th>
                            <th>Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Web Development</td>
                            <td>6 Months</td>
                            <td>John Doe</td>
                        </tr>
                        <tr>
                            <td>Data Science</td>
                            <td>4 Months</td>
                            <td>Jane Smith</td>
                        </tr>
                        <tr>
                            <td>AI & Machine Learning</td>
                            <td>8 Months</td>
                            <td>Ali Khan</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </SourceCodeContainer>
    );
}
