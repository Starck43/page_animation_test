import { memo, SVGProps, FC } from "react"


interface IconProps extends SVGProps<SVGSVGElement> {
    className?: string
    Svg: FC<SVGProps<SVGSVGElement>> | string
}

export const Icon = memo((props: IconProps) => {
    const { className="svg-icon", Svg, ...other } = props

    return <Svg className={className} {...other} />
})
