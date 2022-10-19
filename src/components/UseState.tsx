import { useState } from 'react';

type ContentProps = {
    initialValue: number
}

const Counter = (props: ContentProps) => {
    const { initialValue } = props;
    //カウントを保持する1つの状態をuseState()で定義する。引数には初期値を指定する。
    //countが現在の状態,setCount()が状態を更新する関数
    const [count, setCount] = useState(initialValue)

    return (
        <div>
            <p>Count: { count }</p>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount((a) => a + 1)}>+</button>
        </div>
    )
}

export default Counter;