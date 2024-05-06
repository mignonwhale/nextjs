"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from "../styles/navigation.module.css"; // css module 적용, css 파일명.module.css로 작성해야함.

export default function Navigation() {
  const path = usePathname();
  console.log(path);
  return (
    <nav className={styles.nav}> {/* css module 적용, css 작성 시, 클래스를 정의하는 것처럼 "."으로 시작 */}
      <ul>
        <li>
          <Link href="/">Home</Link>{path === "/" ? "😩" : ""}
        </li>
      </ul>
      <ul>
          <li>
            <Link href="/routes">Routes</Link>{path === "/routes" ? "😩" : ""}
          </li>
          <li>
            <Link href="/route-group">Route Group</Link>{path === "/route-group" ? "😩" : ""}
          </li>
          <li>
            <Link href="/client-component">Client Component</Link>{path === "/client-component" ? "😩" : ""}
          </li>
          <li>
            <Link href="/layout">Layout</Link>{path === "/layout" ? "😩" : ""}
          </li>
          <li>
            <Link href="/metadata">Metadata</Link>{path === "/metadata" ? "😩" : ""}
          </li>

          <li>
            <Link href="/dynamic-routes">Dynamic Routes</Link>{path === "/dynamic-routes" ? "😩" : ""}
          </li>
          <li>
            <Link href="/fetch">Fetch</Link>{path === "/fetch" ? "😩" : ""}
          </li>
        </ul>
    </nav>
  )
}