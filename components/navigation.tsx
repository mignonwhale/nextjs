"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const path = usePathname();
  console.log(path);
  return (
    <nav>
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