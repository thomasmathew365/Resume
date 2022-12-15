import classNames from 'classnames';
import { ReactElement } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import styles from './Wall.module.scss';

interface CommentFormProps {
    saveComment: (data: FieldValues) => void;
}

export default function CommentForm({ saveComment }: CommentFormProps): ReactElement {
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log("🚀 ~ file: CommentForm.tsx:13 ~ CommentForm ~ errors", errors)

    return (
        <div className={classNames(styles["form-wrapper"])}>
            <form className={classNames(styles["form"])} onSubmit={handleSubmit((data) => saveComment(data))}>
                <span className={classNames(styles["name-label"])}>What should we call you?</span>
                <input className={classNames(styles["name-input"])} type="text" placeholder="Name" {...register("name", { required: true, maxLength: 30 })} />
                <span className={classNames(styles["name-label"])}>How can we contact you?</span>
                <input className={classNames(styles["email-input"])} type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                <span className={classNames(styles["name-label"])}>What do you want to say?</span>
                <textarea className={classNames(styles["comment-input"])} placeholder="Comment" rows={5} {...register("comment", { required: true, maxLength: 140 })} />
                <input type="submit" className={classNames(styles["button-submit"])}/>
            </form>
        </div>
    );
}
