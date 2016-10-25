using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;
using System.Xml;
using System.Data;
using System.Net;

namespace meralcoTrial
{
    public partial class home : System.Web.UI.Page
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Page_Load(object sender, EventArgs e)
        {

            //try
            //{
            //    // BATANGAS
            //    string xmlResult = null;
            //    string url;

            //    url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=Batangas&mode=xml&units=metric&cnt=7&appid=8e3840b1f121bb604715bd61bc36ea1e";
            //    HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
            //    HttpWebResponse response = (HttpWebResponse)request.GetResponse();
            //    StreamReader resStream = new StreamReader(response.GetResponseStream());
            //    XmlDocument doc = new XmlDocument();
            //    xmlResult = resStream.ReadToEnd();
            //    doc.LoadXml(xmlResult);
            //    XmlElement root = doc.DocumentElement;
            //    XmlNodeList nodeList = doc.DocumentElement.SelectNodes("/weatherdata");
            //    foreach (XmlNode node in nodeList)
            //    {
            //        Label1.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/@day").InnerText;
            //        Label2.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/temperature/@day").InnerText;
            //        Label3.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/windDirection/@code").InnerText;
            //        Label4.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/windSpeed/@mps").InnerText;
            //        Label5.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/clouds/@value").InnerText;
            //        // wc1.InnerText = node.SelectSingleNode("/current/wind/speed/@name").InnerText;

                   

            //        Label6.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/@day").InnerText;
            //        Label7.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/temperature/@day").InnerText;
            //        Label8.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/windDirection/@code").InnerText;
            //        Label9.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/windSpeed/@mps").InnerText;
            //        Label10.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/clouds/@value").InnerText;

            //        Label11.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/@day").InnerText;
            //        Label12.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/temperature/@day").InnerText;
            //        Label13.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/windDirection/@code").InnerText;
            //        Label14.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/windSpeed/@mps").InnerText;
            //        Label15.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/clouds/@value").InnerText;



            //        Label16.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/@day").InnerText;
            //        Label17.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/temperature/@day").InnerText;
            //        Label18.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/windDirection/@code").InnerText;
            //        Label19.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/windSpeed/@mps").InnerText;
            //        Label20.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/clouds/@value").InnerText;


            //        Label21.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/@day").InnerText;
            //        Label22.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/temperature/@day").InnerText;
            //        Label23.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/windDirection/@code").InnerText;
            //        Label24.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/windSpeed/@mps").InnerText;
            //        Label25.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/clouds/@value").InnerText;

            //        break;
            //    }
            //}
            //catch (Exception ex)
            //{
            //    Console.WriteLine("Service is down!!");
            //}

            //try
            //{
            //    // RIZAL
            //    string xmlResult1 = null;
            //    string url1;
            //    url1 = "http://api.openweathermap.org/data/2.5/forecast/daily?q=rizal&mode=xml&units=metric&cnt=7&appid=8e3840b1f121bb604715bd61bc36ea1e";
            //    HttpWebRequest request1 = (HttpWebRequest)WebRequest.Create(url1);
            //    HttpWebResponse response1 = (HttpWebResponse)request1.GetResponse();
            //    StreamReader resStream1 = new StreamReader(response1.GetResponseStream());
            //    XmlDocument doc1 = new XmlDocument();
            //    xmlResult1 = resStream1.ReadToEnd();
            //    doc1.LoadXml(xmlResult1);
            //    XmlElement root1 = doc1.DocumentElement;
            //    XmlNodeList nodeList1 = doc1.DocumentElement.SelectNodes("/weatherdata");
            //    foreach (XmlNode node in nodeList1)
            //    {
            //        Label26.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/@day").InnerText;
            //        Label27.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/temperature/@day").InnerText;
            //        Label28.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/windDirection/@code").InnerText;
            //        Label29.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/windSpeed/@mps").InnerText;
            //        Label30.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/clouds/@value").InnerText;
            //        // wc1.InnerText = node.SelectSingleNode("/current/wind/speed/@name").InnerText;

            //        Label31.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/@day").InnerText;
            //        Label32.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/temperature/@day").InnerText;
            //        Label33.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/windDirection/@code").InnerText;
            //        Label34.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/windSpeed/@mps").InnerText;
            //        Label35.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/clouds/@value").InnerText;



            //        Label36.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/@day").InnerText;
            //        Label37.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/temperature/@day").InnerText;
            //        Label38.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/windDirection/@code").InnerText;
            //        Label39.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/windSpeed/@mps").InnerText;
            //        Label40.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/clouds/@value").InnerText;


            //        Label41.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/@day").InnerText;
            //        Label42.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/temperature/@day").InnerText;
            //        Label43.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/windDirection/@code").InnerText;
            //        Label44.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/windSpeed/@mps").InnerText;
            //        Label45.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/clouds/@value").InnerText;


            //        Label46.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/@day").InnerText;
            //        Label47.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/temperature/@day").InnerText;
            //        Label48.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/windDirection/@code").InnerText;
            //        Label49.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/windSpeed/@mps").InnerText;
            //        Label50.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/clouds/@value").InnerText;

            //        break;
            //    }
            //}
            //catch (Exception ex)
            //{

            //    Console.WriteLine("Service Temporalily down!!");
            //}

        
            //try
            //{
            //    // BULCAN
            //    string xmlResult2 = null;
            //    string url2;
            //    url2 = "http://api.openweathermap.org/data/2.5/forecast/daily?q=Bulcan&mode=xml&units=metric&cnt=7&appid=8e3840b1f121bb604715bd61bc36ea1e";
            //    HttpWebRequest request2 = (HttpWebRequest)WebRequest.Create(url2);
            //    HttpWebResponse response2 = (HttpWebResponse)request2.GetResponse();
            //    StreamReader resStream2 = new StreamReader(response2.GetResponseStream());
            //    XmlDocument doc2 = new XmlDocument();
            //    xmlResult2 = resStream2.ReadToEnd();
            //    doc2.LoadXml(xmlResult2);
            //    XmlElement root2 = doc2.DocumentElement;
            //    XmlNodeList nodeList2 = doc2.DocumentElement.SelectNodes("/weatherdata");
            //    foreach (XmlNode node in nodeList2)
            //    {
            //        Label51.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/@day").InnerText;
            //        Label52.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/temperature/@day").InnerText;
            //        Label53.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/windDirection/@code").InnerText;
            //        Label54.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/windSpeed/@mps").InnerText;
            //        Label55.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/clouds/@value").InnerText;
            //        // wc1.InnerText = node.SelectSingleNode("/current/wind/speed/@name").InnerText;

            //        Label56.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/@day").InnerText;
            //        Label57.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/temperature/@day").InnerText;
            //        Label58.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/windDirection/@code").InnerText;
            //        Label59.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/windSpeed/@mps").InnerText;
            //        Label60.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/clouds/@value").InnerText;



            //        Label61.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/@day").InnerText;
            //        Label62.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/temperature/@day").InnerText;
            //        Label63.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/windDirection/@code").InnerText;
            //        Label64.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/windSpeed/@mps").InnerText;
            //        Label65.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/clouds/@value").InnerText;



            //        Label66.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/@day").InnerText;
            //        Label67.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/temperature/@day").InnerText;
            //        Label68.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/windDirection/@code").InnerText;
            //        Label69.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/windSpeed/@mps").InnerText;
            //        Label70.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/clouds/@value").InnerText;


            //        Label71.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/@day").InnerText;
            //        Label72.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/temperature/@day").InnerText;
            //        Label73.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/windDirection/@code").InnerText;
            //        Label74.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/windSpeed/@mps").InnerText;
            //        Label75.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/clouds/@value").InnerText;

            //        break;
            //    }
            //}
            //catch (Exception ex)
            //{

            //    Console.WriteLine("Service Temporalily down!!");
            //}
            //try
            //{
            //    // METRO MANILA
            //    string xmlResult3 = null;
            //    string url3;
            //    url3 = "http://api.openweathermap.org/data/2.5/forecast/daily?q=metromanila&mode=xml&units=metric&cnt=7&appid=8e3840b1f121bb604715bd61bc36ea1e";
            //    HttpWebRequest request3 = (HttpWebRequest)WebRequest.Create(url3);
            //    HttpWebResponse response3 = (HttpWebResponse)request3.GetResponse();
            //    StreamReader resStream3 = new StreamReader(response3.GetResponseStream());
            //    XmlDocument doc3 = new XmlDocument();
            //    xmlResult3 = resStream3.ReadToEnd();
            //    doc3.LoadXml(xmlResult3);
            //    XmlElement root3 = doc3.DocumentElement;
            //    XmlNodeList nodeList3 = doc3.DocumentElement.SelectNodes("/weatherdata");
            //    foreach (XmlNode node in nodeList3)
            //    {
            //        Label76.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/@day").InnerText;
            //        Label77.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/temperature/@day").InnerText;
            //        Label78.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/windDirection/@code").InnerText;
            //        Label79.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/windSpeed/@mps").InnerText;
            //        Label80.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/clouds/@value").InnerText;


            //        // wc1.InnerText = node.SelectSingleNode("/current/wind/speed/@name").InnerText;

            //        Label81.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/@day").InnerText;
            //        Label82.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/temperature/@day").InnerText;
            //        Label83.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/windDirection/@code").InnerText;
            //        Label84.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/windSpeed/@mps").InnerText;
            //        Label85.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/clouds/@value").InnerText;



            //        Label86.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/@day").InnerText;
            //        Label87.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/temperature/@day").InnerText;
            //        Label88.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/windDirection/@code").InnerText;
            //        Label89.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/windSpeed/@mps").InnerText;
            //        Label90.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/clouds/@value").InnerText;



            //        Label91.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/@day").InnerText;
            //        Label91.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/temperature/@day").InnerText;
            //        Label93.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/windDirection/@code").InnerText;
            //        Label94.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/windSpeed/@mps").InnerText;
            //        Label95.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/clouds/@value").InnerText;


            //        Label96.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/@day").InnerText;
            //        Label97.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/temperature/@day").InnerText;
            //        Label98.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/windDirection/@code").InnerText;
            //        Label99.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/windSpeed/@mps").InnerText;
            //        Label100.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/clouds/@value").InnerText;

            //        break;
            //    }
            //}
            //catch (Exception ex)
            //{ Console.WriteLine("Service temporalily Down!!"); }


            //try
            //{
            //    // PAMPANGA
            //    string xmlResult4 = null;
            //    string url4;
            //    url4 = "http://api.openweathermap.org/data/2.5/forecast/daily?q=Pampanga&mode=xml&units=metric&cnt=7&appid=8e3840b1f121bb604715bd61bc36ea1e";
            //    HttpWebRequest request4 = (HttpWebRequest)WebRequest.Create(url4);
            //    HttpWebResponse response4 = (HttpWebResponse)request4.GetResponse();
            //    StreamReader resStream4 = new StreamReader(response4.GetResponseStream());
            //    XmlDocument doc4 = new XmlDocument();
            //    xmlResult4 = resStream4.ReadToEnd();
            //    doc4.LoadXml(xmlResult4);
            //    XmlElement root4 = doc4.DocumentElement;
            //    XmlNodeList nodeList4 = doc4.DocumentElement.SelectNodes("/weatherdata");
            //    foreach (XmlNode node in nodeList4)
            //    {
            //        Label101.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/@day").InnerText;
            //        Label102.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/temperature/@day").InnerText;
            //        Label103.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/windDirection/@code").InnerText;
            //        Label104.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/windSpeed/@mps").InnerText;
            //        Label105.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/clouds/@value").InnerText;
            //        // wc1.InnerText = node.SelectSingleNode("/current/wind/speed/@name").InnerText;

            //        Label106.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/@day").InnerText;
            //        Label107.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/temperature/@day").InnerText;
            //        Label108.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/windDirection/@code").InnerText;
            //        Label109.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/windSpeed/@mps").InnerText;
            //        Label110.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/clouds/@value").InnerText;



            //        Label111.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/@day").InnerText;
            //        Label112.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/temperature/@day").InnerText;
            //        Label113.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/windDirection/@code").InnerText;
            //        Label114.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/windSpeed/@mps").InnerText;
            //        Label115.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/clouds/@value").InnerText;



            //        Label116.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/@day").InnerText;
            //        Label117.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/temperature/@day").InnerText;
            //        Label118.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/windDirection/@code").InnerText;
            //        Label119.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/windSpeed/@mps").InnerText;
            //        Label120.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/clouds/@value").InnerText;


            //        Label121.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/@day").InnerText;
            //        Label122.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/temperature/@day").InnerText;
            //        Label123.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/windDirection/@code").InnerText;
            //        Label124.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/windSpeed/@mps").InnerText;
            //        Label125.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/clouds/@value").InnerText;

            //        break;
            //    }
            //}
            //catch (Exception ex)
            //{ Console.WriteLine("Service Down!!"); }


            //try
            //{
            //    // CAVITE
            //    string xmlResult5 = null;
            //    string url5;
            //    url5 = "http://api.openweathermap.org/data/2.5/forecast/daily?q=cavite&mode=xml&units=metric&cnt=7&appid=8e3840b1f121bb604715bd61bc36ea1e";
            //    HttpWebRequest request5 = (HttpWebRequest)WebRequest.Create(url5);
            //    HttpWebResponse response5 = (HttpWebResponse)request5.GetResponse();
            //    StreamReader resStream5 = new StreamReader(response5.GetResponseStream());
            //    XmlDocument doc5 = new XmlDocument();
            //    xmlResult5 = resStream5.ReadToEnd();
            //    doc5.LoadXml(xmlResult5);
            //    XmlElement root5 = doc5.DocumentElement;
            //    XmlNodeList nodeList5 = doc5.DocumentElement.SelectNodes("/weatherdata");
            //    foreach (XmlNode node in nodeList5)
            //    {
            //        Label126.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/@day").InnerText;
            //        Label127.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/temperature/@day").InnerText;
            //        Label128.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/windDirection/@code").InnerText;
            //        Label129.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/windSpeed/@mps").InnerText;
            //        Label130.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/clouds/@value").InnerText;
            //        // wc1.InnerText = node.SelectSingleNode("/current/wind/speed/@name").InnerText;


            //        Label131.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/@day").InnerText;
            //        Label132.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/temperature/@day").InnerText;
            //        Label133.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/windDirection/@code").InnerText;
            //        Label134.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/windSpeed/@mps").InnerText;
            //        Label135.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/clouds/@value").InnerText;



            //        Label136.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/@day").InnerText;
            //        Label137.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/temperature/@day").InnerText;
            //        Label138.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/windDirection/@code").InnerText;
            //        Label139.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/windSpeed/@mps").InnerText;
            //        Label140.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/clouds/@value").InnerText;



            //        Label141.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/@day").InnerText;
            //        Label142.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/temperature/@day").InnerText;
            //        Label143.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/windDirection/@code").InnerText;
            //        Label144.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/windSpeed/@mps").InnerText;
            //        Label145.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/clouds/@value").InnerText;


            //        Label146.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/@day").InnerText;
            //        Label147.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/temperature/@day").InnerText;
            //        Label148.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/windDirection/@code").InnerText;
            //        Label149.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/windSpeed/@mps").InnerText;
            //        Label150.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/clouds/@value").InnerText;

            //        break;
            //    }
            //}
            //catch (Exception ex)
            //{ Console.WriteLine("Sevice down!!"); }


            //try
            //{
            //    // LAGUNA
            //    string xmlResult6 = null;
            //    string url6;
            //    url6 = "http://api.openweathermap.org/data/2.5/forecast/daily?q=Laguna&mode=xml&units=metric&cnt=7&appid=8e3840b1f121bb604715bd61bc36ea1e";
            //    HttpWebRequest request6 = (HttpWebRequest)WebRequest.Create(url6);
            //    HttpWebResponse response6 = (HttpWebResponse)request6.GetResponse();
            //    StreamReader resStream6 = new StreamReader(response6.GetResponseStream());
            //    XmlDocument doc6 = new XmlDocument();
            //    xmlResult6 = resStream6.ReadToEnd();
            //    doc6.LoadXml(xmlResult6);
            //    XmlElement root6 = doc6.DocumentElement;
            //    XmlNodeList nodeList6 = doc6.DocumentElement.SelectNodes("/weatherdata");
            //    foreach (XmlNode node in nodeList6)
            //    {
            //        Label151.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/@day").InnerText;
            //        Label152.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/temperature/@day").InnerText;
            //        Label153.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/windDirection/@code").InnerText;
            //        Label154.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/windSpeed/@mps").InnerText;
            //        Label155.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/clouds/@value").InnerText;
            //        // wc1.InnerText = node.SelectSingleNode("/current/wind/speed/@name").InnerText;

            //        Label156.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/@day").InnerText;
            //        Label157.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/temperature/@day").InnerText;
            //        Label158.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/windDirection/@code").InnerText;
            //        Label159.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/windSpeed/@mps").InnerText;
            //        Label160.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/clouds/@value").InnerText;



            //        Label161.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/@day").InnerText;
            //        Label162.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/temperature/@day").InnerText;
            //        Label163.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/windDirection/@code").InnerText;
            //        Label164.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/windSpeed/@mps").InnerText;
            //        Label165.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/clouds/@value").InnerText;



            //        Label166.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/@day").InnerText;
            //        Label167.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/temperature/@day").InnerText;
            //        Label168.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/windDirection/@code").InnerText;
            //        Label169.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/windSpeed/@mps").InnerText;
            //        Label170.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/clouds/@value").InnerText;


            //        Label171.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/@day").InnerText;
            //        Label172.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/temperature/@day").InnerText;
            //        Label173.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/windDirection/@code").InnerText;
            //        Label174.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/windSpeed/@mps").InnerText;
            //        Label175.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/clouds/@value").InnerText;

            //        break;
            //    }
            //}
            //catch (Exception ex) { Console.WriteLine("Service Down!!"); }


            //try
            //{
            //    // Quezon
            //    string xmlResult7 = null;
            //    string url7;
            //    url7 = "http://api.openweathermap.org/data/2.5/forecast/daily?q=quezon&mode=xml&units=metric&cnt=7&appid=8e3840b1f121bb604715bd61bc36ea1e";
            //    HttpWebRequest request7 = (HttpWebRequest)WebRequest.Create(url7);
            //    HttpWebResponse response7 = (HttpWebResponse)request7.GetResponse();
            //    StreamReader resStream7 = new StreamReader(response7.GetResponseStream());
            //    XmlDocument doc7 = new XmlDocument();
            //    xmlResult7 = resStream7.ReadToEnd();
            //    doc7.LoadXml(xmlResult7);
            //    XmlElement root7 = doc7.DocumentElement;
            //    XmlNodeList nodeList7 = doc7.DocumentElement.SelectNodes("/weatherdata");
            //    foreach (XmlNode node in nodeList7)
            //    {
            //        Label176.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/@day").InnerText;
            //        Label177.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/temperature/@day").InnerText;
            //        Label178.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/windDirection/@code").InnerText;
            //        Label179.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/windSpeed/@mps").InnerText;
            //        Label180.Text = node.SelectSingleNode("/weatherdata/forecast/time[1]/clouds/@value").InnerText;
            //        // wc1.InnerText = node.SelectSingleNode("/current/wind/speed/@name").InnerText;

            //        Label181.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/@day").InnerText;
            //        Label182.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/temperature/@day").InnerText;
            //        Label183.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/windDirection/@code").InnerText;
            //        Label184.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/windSpeed/@mps").InnerText;
            //        Label185.Text = node.SelectSingleNode("/weatherdata/forecast/time[2]/clouds/@value").InnerText;



            //        Label186.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/@day").InnerText;
            //        Label187.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/temperature/@day").InnerText;
            //        Label188.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/windDirection/@code").InnerText;
            //        Label189.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/windSpeed/@mps").InnerText;
            //        Label190.Text = node.SelectSingleNode("/weatherdata/forecast/time[3]/clouds/@value").InnerText;

            //        Label191.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/@day").InnerText;
            //        Label192.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/temperature/@day").InnerText;
            //        Label193.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/windDirection/@code").InnerText;
            //        Label194.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/windSpeed/@mps").InnerText;
            //        Label195.Text = node.SelectSingleNode("/weatherdata/forecast/time[4]/clouds/@value").InnerText;


            //        Label196.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/@day").InnerText;
            //        Label197.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/temperature/@day").InnerText;
            //        Label198.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/windDirection/@code").InnerText;
            //        Label199.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/windSpeed/@mps").InnerText;
            //        Label200.Text = node.SelectSingleNode("/weatherdata/forecast/time[5]/clouds/@value").InnerText;

            //        break;
            //    }
            //}
            //catch { Console.WriteLine("Service Down!!"); }


            //// pampanga
            //string xmlResult = null;
            //string url;
            //url = "http://api.openweathermap.org/data/2.5/weather?q=Pampanga&mode=xml&units=metric&appid=8bc877ba86476960bd1b8c9bf36dca33";
            //HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
            //HttpWebResponse response = (HttpWebResponse)request.GetResponse();
            //StreamReader resStream = new StreamReader(response.GetResponseStream());
            //XmlDocument doc = new XmlDocument();
            //xmlResult = resStream.ReadToEnd();
            //doc.LoadXml(xmlResult);
            //XmlElement root = doc.DocumentElement;
            //XmlNodeList nodeList = doc.DocumentElement.SelectNodes("/current");
            //foreach (XmlNode node in nodeList)
            //{
            //    lbl1.Text = node.SelectSingleNode("/current/temperature/@value").InnerText;
            //    lbl2.Text = node.SelectSingleNode("/current/pressure/@value").InnerText;
            //    lbl3.Text = node.SelectSingleNode("/current/humidity/@value").InnerText;
            //    lbl4.Text = node.SelectSingleNode("/current/wind/speed/@value").InnerText;
            //    lbl5.Text = node.SelectSingleNode("/current/wind/direction/@name").InnerText;
            //    // wc1.InnerText = node.SelectSingleNode("/current/wind/speed/@name").InnerText;
            //    break;
            //}
            ////Bulacan
            //string xmlResult1 = null;
            //string url1;
            //url1 = "http://api.openweathermap.org/data/2.5/weather?q=Bulacan&mode=xml&units=metric&appid=8bc877ba86476960bd1b8c9bf36dca33";
            //HttpWebRequest request1 = (HttpWebRequest)WebRequest.Create(url1);
            //HttpWebResponse response1 = (HttpWebResponse)request1.GetResponse();
            //StreamReader resStream1 = new StreamReader(response1.GetResponseStream());
            //XmlDocument doc1 = new XmlDocument();
            //xmlResult1 = resStream1.ReadToEnd();
            //doc1.LoadXml(xmlResult1);
            //XmlElement root1 = doc1.DocumentElement;
            //XmlNodeList nodeList1 = doc1.DocumentElement.SelectNodes("/current");
            //foreach (XmlNode node in nodeList1)
            //{
            //    lbl6.Text = node.SelectSingleNode("/current/temperature/@value").InnerText;
            //    lbl7.Text = node.SelectSingleNode("/current/pressure/@value").InnerText;
            //    lbl8.Text = node.SelectSingleNode("/current/humidity/@value").InnerText;
            //    lbl9.Text = node.SelectSingleNode("/current/wind/speed/@value").InnerText;
            //    lbl10.Text = node.SelectSingleNode("/current/wind/direction/@name").InnerText;
            //    //  wc2.InnerText = node.SelectSingleNode("/current/wind/speed/@name").InnerText;
            //    break;
            //}

            ////Metro Manila

            //string xmlResult2 = null;
            //string url2;
            //url2 = "http://api.openweathermap.org/data/2.5/weather?q=Metro Manila&mode=xml&units=metric&appid=8bc877ba86476960bd1b8c9bf36dca33";
            //HttpWebRequest request2 = (HttpWebRequest)WebRequest.Create(url2);
            //HttpWebResponse response2 = (HttpWebResponse)request2.GetResponse();
            //StreamReader resStream2 = new StreamReader(response2.GetResponseStream());
            //XmlDocument doc2 = new XmlDocument();
            //xmlResult2 = resStream2.ReadToEnd();
            //doc2.LoadXml(xmlResult2);
            //XmlElement root2 = doc2.DocumentElement;
            //XmlNodeList nodeList2 = doc2.DocumentElement.SelectNodes("/current");
            //foreach (XmlNode node in nodeList2)
            //{
            //    lbl11.Text = node.SelectSingleNode("/current/temperature/@value").InnerText;
            //    lbl12.Text = node.SelectSingleNode("/current/pressure/@value").InnerText;
            //    lbl13.Text = node.SelectSingleNode("/current/humidity/@value").InnerText;
            //    lbl14.Text = node.SelectSingleNode("/current/wind/speed/@value").InnerText;

            //    lbl15.Text = node.SelectSingleNode("/current/wind/direction/@name").InnerText;
            //    // wc3.InnerText = node.SelectSingleNode("/current/wind/speed/@name").InnerText;
            //    break;
            //}

            ////Rizal
            //string xmlResult3 = null;
            //string url3;
            //url3 = "http://api.openweathermap.org/data/2.5/weather?q=Rizal&mode=xml&units=metric&appid=8bc877ba86476960bd1b8c9bf36dca33";
            //HttpWebRequest request3 = (HttpWebRequest)WebRequest.Create(url3);
            //HttpWebResponse response3 = (HttpWebResponse)request3.GetResponse();
            //StreamReader resStream3 = new StreamReader(response3.GetResponseStream());
            //XmlDocument doc3 = new XmlDocument();
            //xmlResult3 = resStream3.ReadToEnd();
            //doc3.LoadXml(xmlResult3);
            //XmlElement root3 = doc3.DocumentElement;
            //XmlNodeList nodeList3 = doc3.DocumentElement.SelectNodes("/current");
            //foreach (XmlNode node in nodeList3)
            //{
            //    lbl16.Text = node.SelectSingleNode("/current/temperature/@value").InnerText;
            //    lbl17.Text = node.SelectSingleNode("/current/pressure/@value").InnerText;
            //    lbl18.Text = node.SelectSingleNode("/current/humidity/@value").InnerText;
            //    lbl19.Text = node.SelectSingleNode("/current/wind/speed/@value").InnerText;
            //    lbl20.Text = node.SelectSingleNode("/current/wind/direction/@name").InnerText;
            //    // wc4.InnerText = node.SelectSingleNode("/current/wind/speed/@name").InnerText;
            //    break;
            //}
            ////Cavite
            //string xmlResult4 = null;
            //string url4;
            //url4 = "http://api.openweathermap.org/data/2.5/weather?q=Cavite&mode=xml&units=metric&appid=8bc877ba86476960bd1b8c9bf36dca33";
            //HttpWebRequest request4 = (HttpWebRequest)WebRequest.Create(url4);
            //HttpWebResponse response4 = (HttpWebResponse)request4.GetResponse();
            //StreamReader resStream4 = new StreamReader(response4.GetResponseStream());
            //XmlDocument doc4 = new XmlDocument();
            //xmlResult4 = resStream4.ReadToEnd();
            //doc4.LoadXml(xmlResult4);
            //XmlElement root4 = doc4.DocumentElement;
            //XmlNodeList nodeList4 = doc4.DocumentElement.SelectNodes("/current");
            //foreach (XmlNode node in nodeList4)
            //{
            //    lbl21.Text = node.SelectSingleNode("/current/temperature/@value").InnerText;
            //    lbl22.Text = node.SelectSingleNode("/current/pressure/@value").InnerText;
            //    lbl23.Text = node.SelectSingleNode("/current/humidity/@value").InnerText;
            //    lbl24.Text = node.SelectSingleNode("/current/wind/speed/@value").InnerText;
            //    lbl25.Text = node.SelectSingleNode("/current/wind/direction/@name").InnerText;
            //    //wc5.InnerText = node.SelectSingleNode("/current/wind/speed/@name").InnerText;
            //    break;
            //}
            ////Laguna
            //string xmlResult5 = null;
            //string url5;
            //url5 = "http://api.openweathermap.org/data/2.5/weather?q=Laguna&mode=xml&units=metric&appid=8bc877ba86476960bd1b8c9bf36dca33";
            //HttpWebRequest request5 = (HttpWebRequest)WebRequest.Create(url5);
            //HttpWebResponse response5 = (HttpWebResponse)request5.GetResponse();
            //StreamReader resStream5 = new StreamReader(response5.GetResponseStream());
            //XmlDocument doc5 = new XmlDocument();
            //xmlResult5 = resStream5.ReadToEnd();
            //doc5.LoadXml(xmlResult5);
            //XmlElement root5 = doc5.DocumentElement;
            //XmlNodeList nodeList5 = doc5.DocumentElement.SelectNodes("/current");
            //foreach (XmlNode node in nodeList5)
            //{
            //    lbl26.Text = node.SelectSingleNode("/current/temperature/@value").InnerText;
            //    lbl27.Text = node.SelectSingleNode("/current/pressure/@value").InnerText;
            //    lbl28.Text = node.SelectSingleNode("/current/humidity/@value").InnerText;
            //    lbl29.Text = node.SelectSingleNode("/current/wind/speed/@value").InnerText;
            //    lbl30.Text = node.SelectSingleNode("/current/wind/direction/@name").InnerText;
            //    //  wc6.InnerText = node.SelectSingleNode("/current/wind/speed/@name").InnerText;
            //    break;
            //}

            ////Quezon
            //string xmlResult6 = null;
            //string url6;
            //url6 = "http://api.openweathermap.org/data/2.5/weather?q=Quezon&mode=xml&units=metric&appid=8bc877ba86476960bd1b8c9bf36dca33";
            //HttpWebRequest request6 = (HttpWebRequest)WebRequest.Create(url6);
            //HttpWebResponse response6 = (HttpWebResponse)request6.GetResponse();
            //StreamReader resStream6 = new StreamReader(response6.GetResponseStream());
            //XmlDocument doc6 = new XmlDocument();
            //xmlResult6 = resStream6.ReadToEnd();
            //doc6.LoadXml(xmlResult6);
            //XmlElement root6 = doc6.DocumentElement;
            //XmlNodeList nodeList6 = doc6.DocumentElement.SelectNodes("/current");
            //foreach (XmlNode node in nodeList6)
            //{
            //    lbl31.Text = node.SelectSingleNode("/current/temperature/@value").InnerText;
            //    lbl32.Text = node.SelectSingleNode("/current/pressure/@value").InnerText;
            //    lbl33.Text = node.SelectSingleNode("/current/humidity/@value").InnerText;
            //    lbl34.Text = node.SelectSingleNode("/current/wind/speed/@value").InnerText;
            //    lbl35.Text = node.SelectSingleNode("/current/wind/direction/@name").InnerText;
            //    //  wc7.InnerText = node.SelectSingleNode("/current/wind/speed/@name").InnerText;
            //    break;
            //}

            ////Batangas
            //string xmlResult7 = null;
            //string url7;
            //url7 = "http://api.openweathermap.org/data/2.5/weather?q=Batangas&mode=xml&units=metric&appid=8bc877ba86476960bd1b8c9bf36dca33";
            //HttpWebRequest request7 = (HttpWebRequest)WebRequest.Create(url7);
            //HttpWebResponse response7 = (HttpWebResponse)request7.GetResponse();
            //StreamReader resStream7 = new StreamReader(response7.GetResponseStream());
            //XmlDocument doc7 = new XmlDocument();
            //xmlResult7 = resStream7.ReadToEnd();
            //doc7.LoadXml(xmlResult7);
            //XmlElement root7 = doc7.DocumentElement;
            //XmlNodeList nodeList7 = doc7.DocumentElement.SelectNodes("/current");
            //foreach (XmlNode node in nodeList7)
            //{
            //    lbl36.Text = node.SelectSingleNode("/current/temperature/@value").InnerText;
            //    lbl37.Text = node.SelectSingleNode("/current/pressure/@value").InnerText;
            //    lbl38.Text = node.SelectSingleNode("/current/humidity/@value").InnerText;
            //    lbl39.Text = node.SelectSingleNode("/current/wind/speed/@value").InnerText;
            //    lbl40.Text = node.SelectSingleNode("/current/wind/direction/@name").InnerText;
            //    //   wc8.InnerText = node.SelectSingleNode("/current/wind/speed/@name").InnerText;
            //    break;
            //}
           


        }


        // storm button and weather button - removed runat server

        //protected void stormButton_Click(object sender, EventArgs e)
        //{
        //    //stormInfo.Visible = true;
        //    //weatherInfo.Visible = false;

        //    //stormDiv.Attributes.Add("class", "active-slide");
        //    //weatherDiv.Attributes.Remove("active-slide");
        //}

        //protected void weatherButton_Click(object sender, EventArgs e)
        //{
            
        //}

        //protected void windButton_Click(object sender, EventArgs e)
        //{
         
        //}
           

   }
}