using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;


namespace meralcoTrial
{
    public partial class meralco : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["user"] != null)
            {
                name.InnerText = Convert.ToString(Session["user"]);
                showSignInModal.Attributes.Remove("data-toggle");
                signOut.Attributes.Remove("class");
            }
            
        }

        protected void btnSignIn_Click(object sender, EventArgs e)
        {
      

            var userName = username.Value;
            var passWord = inputPassword.Value;

            var pass2 = HiddenField1.Value;
       

            if( (userName == "tcs1" && passWord == "tcs") || (userName == "tcs2" && passWord == pass2) )
            {
                name.InnerText = userName;
                Session["user"] = userName;
                showSignInModal.Attributes.Remove("data-toggle");
                signOut.Attributes.Remove("class");
               
            }
            else
            {
               Response.Write("<script type=\"text/javascript\">alert('Incorrect Username or Password');</script>");
            }
        }

        protected void signOut_Click(object sender, EventArgs e)
        {
            Session.Remove("user");
            showSignInModal.Attributes.Add("data-toggle", "modal");
            name.InnerText = "SIGN IN";
            signOut.Attributes.Add("class", "hidden");
        }

        
      
    }
}