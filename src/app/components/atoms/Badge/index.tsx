import MUIBadge, { BadgeProps } from '@mui/material/Badge';

export function Badge(props: BadgeProps, children: any) {
  return (
    <MUIBadge {...props}>
      {children}
    </MUIBadge>
  )
}
