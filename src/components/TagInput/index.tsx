import { Input } from 'antd'
import React, { useEffect, useState } from 'react'
import styles from "./index.module.less";

interface IProps {
    value?: string
    onChange?: (value?: string) => void
}

const TagInput = ({
    value,
    onChange
}: IProps) => {


    const [text, setText] = useState(undefined)

    useEffect(() => {
        if (text != value) {
            setText(value)
        }
    }, [value])

    return <div className={styles.tagInput}>
        <Input
            value={text}
            onChange={e => {
                e.stopPropagation()
                const v = e.target.value
                setText(v)
            }}
            onBlur={e => {
                e.stopPropagation()
                onChange && onChange(text)
            }}
            onMouseLeave={e => {
                e.stopPropagation()
                onChange && onChange(text)
            }}
        />
    </div>
}

export default TagInput