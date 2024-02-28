import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

type SidebarItemProps = {
  label: string;
  icon: string;
  number?: number;
  path: string;
};

function SidebarItem(props: SidebarItemProps) {
  const { icon, label, number, path } = props;

  return (
    <NavLink to={path}>
      <Icon icon={icon} />
      <span>{label}</span>
      <span>{number}</span>
    </NavLink>
  );
}

export default SidebarItem;
