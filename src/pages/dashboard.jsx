import React from "react";
import Layout from "../components/organism/Layout";
import Dashboard from "../components/organism/Dashboard";
import Website from "../components/template/Website";
import Keahlian from "../components/template/Keahlian";
import Pengalaman from "../components/template/Pengalaman";

export default function DashboardPage() {
  return (
    <>
      <div className="font-AntiPasto">
        <Layout type="logout">
          <Dashboard></Dashboard>
          <Pengalaman></Pengalaman>
          <Keahlian></Keahlian>
          <Website></Website>
        </Layout>
      </div>
    </>
  );
}
