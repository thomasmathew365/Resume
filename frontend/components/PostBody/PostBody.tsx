import classNames from 'classnames';

import { urlFor } from '../../utils/utils';
import { Body, Children } from './Post.type';
import styles from './PostBody.module.scss';

export default function Post({ body }: { body: Body[] }) {
    return (
        <article>
            {body.map((row, k) => {
                return row._type === 'image' 
                ? <img className={classNames(styles["image"])} key={k} src={urlFor(row).url()} alt={`${k}-image`}/> 
                : <p key={k}>{renderRow(row)}</p>
            })}
        </article>)
}

function renderChildByType(type: string, child: Children, key: number) {
    switch (type) {
        case 'span':
            return <span key={key} className={classNames(child.marks.includes('strong') ? styles["code"] : '')}>{child.text}</span>;
        case 'block':
            return <p key={key}>{child.text}</p>;
        default:
            return <span key={key}>{child.text}</span>;
    }
}

function renderRow(data: Body) {
    return data.children?.map((child, k) => {
        return renderChildByType(child._type, child, k)

    })
}
