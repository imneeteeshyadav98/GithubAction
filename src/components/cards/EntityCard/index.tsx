import { Box, Card, CardContent, Chip, Typography } from "@material-ui/core";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import Avatar from "components/Avatar";
import { memo, ReactNode } from "react";
import useStyles from "./style";

type Collaborator = {
  icon: string;
  first_name: string;
  uuid: string;
};

type EntityCardProps = {
  label: string;
  description: string;
  collaborators: Collaborator[];
  timedesc: string;
  status: string[];
  privacyStatus: boolean;
  children?: ReactNode;
  onLabelClick?: (labelName: string) => void;
  onInfoClick?: (labelName: string) => void;
  className?: string;
};

const MAX_COLLABORATORS_COUNT = 5;

const EntityCard = memo(
  ({
    label,
    description,
    timedesc,
    collaborators,
    status,
    privacyStatus,
    onLabelClick,
    onInfoClick,
    className,
  }: EntityCardProps) => {
    const classes = useStyles();

    return (
      <Box className={classes.containerWrapper + ` ${className}`}>
        <Card className={classes.cardBorder}>
          <CardContent>
            <Box className={classes.headerWrapper}>
              <Typography
                variant="h5"
                className={classes.heading5}
                onClick={() => onLabelClick(label)}
              >
                {label}
              </Typography>
              <Box className={classes.actionIcons}>
                <img
                  src="/icons/icon-bookmark.svg"
                  alt="bookmark"
                  className={classes.icon1}
                />
                {privacyStatus ? (
                  <img
                    src="/icons/icon-profile.svg"
                    alt="private"
                    className={classes.icon2}
                  />
                ) : (
                  <img
                    src="/icons/icon-team.svg"
                    alt="public"
                    className={classes.icon3}
                  />
                )}
                <img
                  src="/icons/icon-info.svg"
                  alt="info"
                  className={classes.icon4}
                  onClick={() => onInfoClick(label)}
                />
              </Box>
            </Box>

            <Typography variant="subtitle2" className={classes.heading6}>
              {description}
            </Typography>
            <Box className={classes.timeWrapper}>
              <Box className={classes.icon}>
                <img src="/icons/icon-clock.svg" alt="clock" />
              </Box>
              <Box className={classes.timedesc}>{timedesc}</Box>
            </Box>
            <Box className={classes.user}>
              {collaborators.map(({ icon, first_name, uuid }) => (
                <AvatarGroup key={uuid} max={MAX_COLLABORATORS_COUNT}>
                  <Avatar type="image" alt={first_name} src={icon} />
                </AvatarGroup>
              ))}
              <Box className={classes.userCount}>
                {collaborators.length === MAX_COLLABORATORS_COUNT
                  ? collaborators.length + "+"
                  : collaborators.length}
              </Box>
            </Box>
            <Box className={classes.statusWrap}>
              {status?.map((data, idx) => (
                <Chip key={idx} label={data} className={classes.status} />
              ))}
            </Box>
          </CardContent>
        </Card>
      </Box>
    );
  }
);

export default EntityCard;
