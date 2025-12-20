type TCopyrightProps = {
    className: string;
}

export const Copyright = (props: TCopyrightProps) => {

    const { className } = props

    const currentYear = new Date().getFullYear()
    return (
        <span className={className}>© {currentYear} Nimof. Все права защищены.</span>
    )
}