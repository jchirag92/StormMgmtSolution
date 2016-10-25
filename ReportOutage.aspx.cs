using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.OleDb;
using Oracle.DataAccess.Client;


namespace meralcoTrial
{
    public partial class ReportOutage : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            fillerImage.Attributes.Remove("class");

            if (Session["user"] != null)
            {
                if (Convert.ToString(Session["user"]) == "tcs1")
                {
                    checkStatus.Attributes.Remove("class");
                }
            }
 

        }

        protected void report1_Click(object sender, EventArgs e)
        {
            fillerImage.Attributes.Add("class", "hidden");
            forOthers.Attributes.Add("class", "hidden");
            forElectricService.Attributes.Remove("class");
            

            if (Convert.ToString(Session["user"]) == "tcs1")
            {
               ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "autoFillESUser1", "<script type='text/javascript'>fillESUser1();</script>", false); 
            }
            else if (Convert.ToString(Session["user"]) == "tcs2")
            {
               ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "autoFillESUser2", "<script type='text/javascript'>fillESUser2();</script>", false); 
            }

        }

        protected void report2_Click(object sender, EventArgs e)
        {
            formfor.InnerHtml = "Streetlights (Municipal)";

            fillerImage.Attributes.Add("class", "hidden");
            forElectricService.Attributes.Add("class", "hidden");
            forOthers.Attributes.Remove("class");
          

            if (Convert.ToString(Session["user"]) == "tcs1")
            {
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "autoFillOSUser1", "<script type='text/javascript'>fillOtherUser1();</script>", false);
            }
            else if (Convert.ToString(Session["user"]) == "tcs2")
            {
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "autoFillOSUser2", "<script type='text/javascript'>fillOtherUser2();</script>", false);
            }
        }

        protected void report3_Click(object sender, EventArgs e)
        {

            formfor.InnerHtml = "Outdoor Lighting";

            fillerImage.Attributes.Add("class", "hidden");
            forElectricService.Attributes.Add("class", "hidden");
            forOthers.Attributes.Remove("class");


            if (Convert.ToString(Session["user"]) == "tcs1")
            {
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "autoFillOSUser1", "<script type='text/javascript'>fillOtherUser1();</script>", false);
            }
            else if (Convert.ToString(Session["user"]) == "tcs2")
            {
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "autoFillOSUser2", "<script type='text/javascript'>fillOtherUser2();</script>", false);
            }
        }
        protected void report4_Click(object sender, EventArgs e)
        {
            formfor.InnerHtml = "Hazardous Conditions";

            fillerImage.Attributes.Add("class", "hidden");
            forElectricService.Attributes.Add("class", "hidden");
            forOthers.Attributes.Remove("class");


            if (Convert.ToString(Session["user"]) == "tcs1")
            {
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "autoFillOSUser1", "<script type='text/javascript'>fillOtherUser1();</script>", false);
            }
            else if (Convert.ToString(Session["user"]) == "tcs2")
            {
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "autoFillOSUser2", "<script type='text/javascript'>fillOtherUser2();</script>", false);
            }
        }

    }
}