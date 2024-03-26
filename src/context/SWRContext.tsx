"use client";
import { SWRConfig } from "swr";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

type Props = {
  children: React.ReactNode;
};

export default function SWRContext({ children }: Props) {
  return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>;
}
