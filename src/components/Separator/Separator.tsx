type TSeparatorProps = {
    className: string;
}

export const Separator = (props: TSeparatorProps) => {

    const {className} = props

    return (
        <>
        <hr className={className}/>
        </>
    )
}