import { Avatar as MatAvatar } from "@material-ui/core";
import { ComponentProps, memo, ReactNode } from "react";
import useStyles from "./style";

type AvatarType = "image" | "letter";

type AvatarProps = ComponentProps<typeof MatAvatar> & {
  type: AvatarType;
  content?: ReactNode;
};

const Avatar = memo(
  ({ type = "letter", content, src, alt, ...rest }: AvatarProps) => {
    const classes = useStyles();

    const renderAvatar = () => {
      switch (type) {
        case "image": {
          return (
            <MatAvatar alt={alt} src={src} className={classes.avatarImgWrap} />
          );
        }
        default:
          return (
            <MatAvatar {...rest} className={classes.avatarImgWrap}>
              {content}
            </MatAvatar>
          );
      }
    };

    return <>{renderAvatar()}</>;
  }
);

export default Avatar;
