interface Props {
  imageLink: string
}

export function BackgroundImage({ imageLink }: Props) {
  return (
    <img
      className="absolute image-bottom-shadow z-0 left-0 top-0 w-full h-screen object-cover blur-xs brightness-25 object-top"
      src={imageLink}
      alt="Moment from movie used as a background."
      draggable={false}
    />
  )
}
