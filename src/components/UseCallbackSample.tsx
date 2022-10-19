//useCallbak関数
//関数をメモ化するためのフック

import React, { useState, useCallback } from 'react';

type ButtonProps = {
    onClick: () => void;
}

//通常の関数コンポーネント
const DecrementButton = (props: ButtonProps) => {
    const { onClick } = props;
    console.log('DecrementButtonが再描画されました');

    return <button onClick={onClick}>Decrement</button>;
}

//memo化した関数コンポーネント
//propsで親コンポーネントから関数を受け取っているため、再描画が発生する(propsが更新されるため)
const IncrementButton = React.memo((props: ButtonProps) => {
    const { onClick } = props;
    console.log('IncrementButtonが再描画されました');
    return <button onClick={onClick}>Increment</button>
})

//memo化した関数コンポーネント
//第2引数に関数を保存,第1引数の関数と比較し、同じ場合はmemo化している関数を返す->更新されない
const DoubleButton = React.memo((props: ButtonProps) => {
    const { onClick } = props;
    console.log('DoubleButtonが再描画されました');

    return <button onClick={onClick}>Double</button>
})

export const Parent = () => {
    const [count, setCount] = useState(0);
    const decrement = () => {
        setCount((c) => c - 1);
    }

    const increment = () => {
        setCount((c) => c + 1);
    }

    const double = useCallback(() => {
        setCount((c) => c * 2);
    }, [])

    return (
        <div>
            <p>Count: {count}</p>
            {/**コンポーネントに関数を渡す */}
            <DecrementButton onClick={decrement} />
            {/**memo化コンポーネントに関数を渡す */}
            <IncrementButton onClick={increment} />
            {/**memo化コンポーネントにmemo化した関数を渡す */}
            <DoubleButton onClick={double} />
        </div>
    )
}