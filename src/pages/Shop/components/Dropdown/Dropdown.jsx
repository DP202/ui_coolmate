
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
 

export default function Dropdown(){
    const [selectedFruit, setSelectedFruit] = useState('Sắp xếp theo');
    const handleSelectChange = (e) => {
        setSelectedFruit(e.target.value);
    };
    return (
        <div className="outer">
            <div>
                <Form.Select value={selectedFruit} onChange={handleSelectChange}>
                    <option value="mango">Sắp xếp tăng dần theo giá</option>
                    <option value="banana">Sắp xếp giảm dần theo giá</option>
                    <option value="cherry">Sản phẩm bán chạy nhất</option>
                   
                </Form.Select>
            </div>
        </div>
    );
}