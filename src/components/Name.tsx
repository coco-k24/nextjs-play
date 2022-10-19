import React from 'react';

const Name = () => {
    //input要素のonChangeイベントに対するコールバック関数
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    }

    return (
        <div style={{padding: '16px', backgroundColor: 'gray'}}>
            <label htmlFor="name">名前</label>
            <input type="text" className='input-name' onChange={onChange} id="name" />
        </div>
    )
}

export default Name;

