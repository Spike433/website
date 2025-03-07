"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, Line, ToggleButton } from "@/once-ui/components";
import styles from "@/components/Header.module.scss";

import { routes } from "@/app/resources";

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      <Flex
        fitHeight
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
      >        
        <Flex fillWidth horizontal="center">
          <Flex
            background="surface"
            border="neutral-medium"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
          >
            <Flex gap="4" vertical="center" textVariant="body-default-s">
              {routes["/"] && (
                <>
                <ToggleButton
                  className="s-flex-hide"
                  prefixIcon="home"
                  href="/"
                  label={"Welcome"}
                  selected={pathname === "/"}
                />
                <ToggleButton
                  className="s-flex-show"
                  prefixIcon="home"
                  href="/"
                  selected={pathname === "/"}
                />
              </>
              )}
              {routes["/about"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="settings"
                    href="/about"
                    label={"Projects"}
                    selected={pathname === "/about"}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="settings"
                    href="/about"
                    selected={pathname === "/about"}
                  />
                </>
              )}
              {routes["/contact"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="share"
                    href="/contact"
                    label={"Contact"}
                    selected={pathname === "/contact"}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="share"
                    href="/contact"
                    selected={pathname === "/contact"}
                  />
                </>
              )}
            </Flex>
          </Flex>
        </Flex>        
      </Flex>
    </>
  );
};
