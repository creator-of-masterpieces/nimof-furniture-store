import type {ReactNode} from "react";

type TCardProps = {
    children: ReactNode,
    className: string,
}

export const Card = (props: TCardProps) => {

    const { children, className } = props

    return (
        <article className={className}>
            {children}
        </article>
    )
}