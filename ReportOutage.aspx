<%@ Page Title="" Language="C#" MasterPageFile="~/meralco.Master" AutoEventWireup="true" CodeBehind="ReportOutage.aspx.cs" Inherits="meralcoTrial.ReportOutage" %>




<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

<%--<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>--%>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<link rel="Stylesheet" type="text/css" href="CSS/reportOutageCSS.css" />

    <%--<asp:Label ID="Label1" runat="server"></asp:Label>--%>
    
<div id="reportOutage" class="col-lg-7">
    <div class="col-xs-6" id="electricServices">
    <div class="panel panel-primary">
      <div class="panel-heading">
          <div class="panel-title"><h3 class="panel-title">Electric Service</h3></div>
      </div>
      <div class="panel-body">
          <div class="col-lg-6">
            <asp:Image ID="ES_house" runat= "server" CssClass="pull-left" ImageUrl="~/IMG/ES_Apartment.jpg"/>
            <asp:Button ID="report1" runat="server" Text="Report" CssClass="btn btn-primary" 
                  style="margin-top:10px ; width:100px" ClientIDMode="Static" UseSubmitBehavior="false"
                  onclick="report1_Click" AutoPostBack = "true"/>
          </div>
          <div class="col-lg-6">
            <ul>
                <li>Living location</li>
                <li>House</li>
                <li>Apartment</li>
                <li>Duplex</li>
            </ul>
          </div>
      </div>  
   </div>   
 </div> 
    <div class="col-xs-6" id="streetLights">
    <div class="panel panel-primary">
      <div class="panel-heading">
          <div class="panel-title"><h3 class="panel-title">Streetlights (Municipal)</h3></div>
      </div>
      <div class="panel-body">
          <div class="col-lg-6">
            <asp:Image ID="Image2" runat="server" CssClass="pull-left" ImageUrl="~/IMG/SL_CityLights.jpg"/>
            <asp:Button ID="report2" runat="server" Text="Report" CssClass="btn btn-primary" 
                  style="margin-top:10px ; width:100px" ClientIDMode="Static" UseSubmitBehavior="false" 
                  onclick="report2_Click"/>
          </div>
          <div class="col-lg-6">
            <ul>
                <li>Broken Pole / Glass</li>
                <li>Bulb Out</li>
                <li>Pole crashed</li>
            </ul>
          </div>
      </div>  
   </div>   
 </div>
   
   <div id="checkStatus" runat="server" class="hidden">
    <input id="reportStatus" type="button" value="Track Status" class="btn btn-primary btn-circle" style="margin-left:37%; width:25%" onclick="removeReportShowStatus()"/>
    </div>
         <br />
        
    <div class="col-xs-6" id="outdoorLighting">
    <div class="panel panel-primary">
      <div class="panel-heading">
          <div class="panel-title"><h3 class="panel-title">Outdoor Lighting & Security Lighting</h3></div>
      </div>
      <div class="panel-body">
          <div class="col-lg-6">
            <asp:Image ID="Image1" runat="server" CssClass="pull-left" ImageUrl="~/IMG/ODSL_SecurityLighting.jpg"/>
            <asp:Button ID="report3" runat="server" Text="Report" CssClass="btn btn-primary" 
                  style="margin-top:10px ; width:100px" ClientIDMode="Static"  UseSubmitBehavior="false"
                  onclick="report3_Click"/>
          </div>
          <div class="col-lg-6">
            <ul>
                <li>Free standing light</li>
                <li>Security Lights</li>
                <li>Parking Lot Lighting</li>
            </ul>
          </div>
      </div>  
   </div>   
 </div>
    <div class="col-xs-6" id="hazardousLocation" >
    <div class="panel panel-primary" >
      <div class="panel-heading">
          <div class="panel-title"><h3 class="panel-title">Hazardous Conditions</h3></div>
      </div>
      <div class="panel-body">
          <div class="col-lg-6">
            <asp:Image ID="Image3" runat="server" CssClass="pull-left" ImageUrl="~/IMG/AC_BrokenPole.jpg"/>
            <asp:Button ID="report4" runat="server" Text="Report" CssClass="btn btn-primary"
                  style="margin-top:10px ; width:100px" ClientIDMode="Static"  UseSubmitBehavior="false"
                  OnClick="report4_Click"/>
          </div>
          <div class="col-lg-6">
            <ul>
            <li>Broken pole</li>
            <li>Animals on lines</li>
            <li>Items hanging on line</li>
        </ul>
          </div>
      </div>  
   </div>   
 </div> 
</div>                                                                                                            

<div class="col-lg-5 pull-right">
    
    <div id="fillerImage" class="col-lg-12" runat="server" clientidmode="Static" >
          <asp:Image ID="Image5" runat="server" Height="260px" Width="100%" cssClass="img-rounded col-lg-6" ImageUrl="~/IMG/bgc-meralco.jpg"/>
        <asp:Image ID="Image4" runat="server" Height="170px" Width="100%" style="margin-top:15px" cssClass="img-rounded col-lg-6" ImageUrl="~/IMG/report-an-outage.jpg"/>  
    </div>

    <div id="forElectricService" class="hidden" runat="server" clientidmode="Static" enableviewstate="true">
        <div class="panel panel-primary">
          <div class="panel-heading">
          <div class="panel-title"><h3 class="panel-title">Report an Outage - Electric Services</h3></div>
      </div>
          <div class="panel-body">

     <form role="form">
         
         
          <div class="form-group input-group">
               <span class="input-group-addon"><i class="glyphicon glyphicon-earphone"></i></span>
               <input type="text" id="contactNo"  class="form-control" placeholder="Contact No" clientidmode="Static" required="true" />
                
                <span class="input-group-addon"><i class="glyphicon glyphicon-sound-7-1"></i></span>
                <input type="text" id="meterId"  class="form-control" placeholder="Meter ID" clientidmode="Static" required="true" />
          </div>

         <div class="form-group input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
              <input type="text" class="form-control" id="username"  placeholder="Your Name" clientidmode="Static" required="true"/>
          </div>

          <div class="form-group input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
              <input type="text" class="form-control" id="mailadd"  placeholder="Email-ID" clientidmode="Static" required="true"/>
          </div>

          <div class="form-group input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-map-marker"  ></i></span>
                <textarea class="form-control"  id="location1" rows="2" placeholder="Outage Location" required="true" clientidmode="Static"></textarea>
          </div>
          <div class="form-group input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-globe"></i></span>
                <input type="text" id="zip1"  class="form-control" placeholder="Zip-Code" required="true" clientidmode="Static"/>
 
                <span class="input-group-addon"><i class="glyphicon glyphicon-tag"></i></span>
                <input type="text" id="city1"  class="form-control" placeholder="City" required="true" clientidmode="Static" />
       
                <span class="input-group-addon"><i class="glyphicon glyphicon-tags"></i></span>
                <input type="text" id="province1"  class="form-control" placeholder="Province" required="true" clientidmode="Static" />
          </div>
          <div class="form-group input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-folder-open"></i></span>
                <input type="file" class="form-control"/>
          </div>
          <div class="form-group input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-align-justify"  ></i></span>
                <textarea class="form-control" id="description1" rows="3" placeholder="Description (Optional)" clientidmode="Static"></textarea>
          </div>

        

        <a href="#" id="submitReport1" class="btn btn-primary col-sm-offset-3" onclick="submit1()">Submit</a>

          <a href="#" id="cancel1" class="btn btn-primary col-sm-offset-3">Cancel</a>
     </form>
                                   
</div>
        </div>
    </div>

    <div id="forOthers" class="hidden" runat="server" clientidmode="Static" enableviewstate="true">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <div class="panel-title"><h3 class="panel-title">Report an Outage - <span id="formfor" runat="server"> Electric Services </span></h3></div>
          </div>
          <div class="panel-body">
            <form role="form">
                <div class="form-group input-group">
                   <span class="input-group-addon"><i class="glyphicon glyphicon-earphone"></i></span>
                   <input id="OcontactNo" type="text" class="form-control" placeholder="Contact No" clientidmode="Static"/>      
                </div>
                <div class="form-group input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                    <input type="text" id="Ousername" class="form-control" placeholder="Your Name" clientidmode="Static"/>
                </div>
          

          <div class="form-group input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
              <input type="text" id="Omailadd" class="form-control" placeholder="Email-ID" clientidmode="Static"/>
          </div>

          <div class="form-group input-group danger">
                <span class="input-group-addon"><i class="glyphicon glyphicon-map-marker"  ></i></span>
                <textarea class="form-control" id="location2" rows="2" placeholder="Outage Location"></textarea>
          </div>
          <div class="form-group input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-globe"></i></span>
                <input type="text" class="form-control" id="zip2" placeholder="Zip-Code" />
 
                <span class="input-group-addon"><i class="glyphicon glyphicon-tag"></i></span>
                <input type="text" class="form-control" id="city2" placeholder="City" />
       
                <span class="input-group-addon"><i class="glyphicon glyphicon-tags"></i></span>
                <input type="text" class="form-control"  id="province2" placeholder="Province" />
          </div>
            <div class="form-group input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-folder-open"></i></span>
                <input type="file" class="form-control"/>
          </div>
           <div class="form-group input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-align-justify"  ></i></span>
                <textarea class="form-control" id="description2" rows="3" placeholder="Description (Optional)"></textarea>
          </div>
           <a href="#" id="submitReport2" class="btn btn-primary col-sm-offset-3"  onclick="submit2()">Submit</a>
           <a href="#" id="cancel2"  class="btn btn-primary col-sm-offset-3">Cancel</a>

           </form>
                                   
</div>
        </div>
    </div>

    
</div> 
       <script type="text/javascript">
               
                var tracknumber = Math.round(Math.exp(Math.random() * Math.log(10000 - 0 + 1))) + 0;
                var etr = Math.floor(Math.random() * (180 - 30)) + 30;

                    
                  $("#submitReport1").click(function () {
                      $.get("https://api-mapper.clicksend.com/http/v2/send.php?method=http&username=aditya0007&key=48D19352-6F7A-EA55-6D57-43A0DAE2B453&to=" + $('#contactNo').val() + "&message=Hello%20" + $("#username").val() + ",%20Your%20outage%20is%20reported%20successfully.%20Track%20Id%20:%20TRACK00"+ tracknumber + "%20ETR%20:%20" + etr + "%20mins%20Thank%20You." );
                  
                  });
                $("#submitReport2").click(function () {
                    $.get("https://api-mapper.clicksend.com/http/v2/send.php?method=http&username=aditya0007&key=48D19352-6F7A-EA55-6D57-43A0DAE2B453&to=" + $('#OcontactNo').val() + "&message=Hello%20" + $("#Ousername").val() + ",%20Your%20outage%20is%20reported%20successfully.%20Track%20Id%20:%20TRACK00" + tracknumber + "ETR%20:%20" + etr + "%20Thank%20You.");
            
                 });
              </script>   

<div id="statusOfReport" class="col-lg-7 hidden">
        
    <table class="table table-hover table-striped">
        <thead>
          <tr>
            <th>Report Id</th>
            <th>Location</th>
            <th>Zipcode</th>
            <th>City</th>
            <th>Province</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span runat="server" id="treportID" clientidmode="Static"></span></td>
            <td><span runat="server" id="tLocation" clientidmode="Static"></span></td>
            <td><span runat="server" id="tZip" clientidmode="Static"></span></td>
            <td><span id="tCity"></span></td>
            <td><span id="tProvince"></span></td>
            <td><span id="tDescription"></span></td>
            <td><span id="tStatus"></span></td>
          </tr>
          <tr>
            <td>12546</td>
            <td>7114 Kundiman Street, Sampaloc</td>
            <td>1008</td>
            <td>Manila</td>
            <td>Metro Manila</td>
            <td></td>
            <td>Assigned</td>
          </tr>
          <tr>
            <td>11846</td>
            <td>Calawis Road, Antipolo</td>
            <td>1870</td>
            <td>Antipolo</td>
            <td>Rizal</td>
            <td>Streetlight is broken</td>
            <td>Resolved</td>
          </tr>
          
        </tbody>
    </table>

    <a href="#" id="back"  class="btn btn-primary" onclick="removeStatusShowReport()">Back</a>
    

</div>

<%--<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>--%>


<script type="text/javascript" src="JS/ReportOutage.js"></script>
</asp:Content>