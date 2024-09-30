import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer",
};

export default function Customers() {
  const fetchHello = async () => {
    const res = await fetch("/api/hello");
    const json = await res.json();
    console.log({ json });
  }

  fetchHello();
  return <h1>Customers</h1>;
}
