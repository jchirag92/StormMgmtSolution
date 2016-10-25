<%@ Page Title="" Language="C#" MasterPageFile="~/meralco.Master" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="meralcoTrial.home" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    
    <link type="text/css" href="CSS/homeCSS.css" rel="Stylesheet" />
    
    <script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>

   <script type="text/javascript" src="JS/homeJS.js"></script>

    <div class="pull-left col-lg-3" id="leftNav">
             
      <div class="panel panel-default">
           <div class="panel-heading panel-collapse">
                News Feed
            </div>
            <div class="panel-body">           
                 <div id="marqueecontainer" onmouseover="copyspeed=pausespeed" onmouseout="copyspeed=marqueespeed">
                 <div id="vmarquee" style="position: absolute; ">

                                   <h5 class="text-muted">Storm xxxxx is 250 km away from the shore (2 mins before).<br />
                                   Storm is getting stronger and moving west way (30 mins before).<br/>
                                   Likely storm buildup in XXX area (3 hrs before).
                                   </h5>
                </div>
                </div>
            </div>
        </div>
         <div>
            <asp:button runat="server" ID="stormButton"  Text="Storm Path" disabled="disabled" data-content="View Storm Path and its details"  CssClass="btn btn-primary" ClientIDMode="Static" />
           
            <asp:button runat="server" ID="weatherButton" Text="Weather Details" data-toggle="tooltip" data-placement="bottom" data-content="View Weather Information" CssClass="btn btn-primary" ClientIDMode="Static"/>
            
             <%--<asp:Button ID="windButton" runat="server" Text="Wind Details" data-placement="bottom" data-content="View Wind Information" onclick="windButton_Click" CssClass="btn-primary" ClientIDMode="Static" data-toggle="modal" data-target="#windTable"/>--%>
       
        </div>
        <br/>
        <div id="stormInfo" class="panel panel-default" >
              <div class="panel-heading">
                <asp:Label ID="typhoon" runat="server" Text="Typhoon Haiyan" Font-Bold="true"></asp:Label>&nbsp;&nbsp;&nbsp;<span><em>Yolanda</em></span>
            </div>
            <div class="panel-body">
                <p> 
                    Highest winds : <em><strong>230 km/h (145 mph)</strong></em><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>(10-minute sustiained)</i> <br/>
                    Lowest pressure : <em><strong>	895 mbar (hPa) <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 26.43 in Hg </strong></em> <br/> 
                    Fatalities : <em><strong>6,340 confirmed <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1,061 missing</strong></em><br/> 
                    Damage : <em><strong>$2.86 billion (2013 USD)</strong></em> </p>
                    
                <br />
                <div class="btn-group dropup pull-left" >
                    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                        Storm Path Day-Wise <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu" role="menu">
                        <li><a href="#" onclick="day1Storm()">Day 1</a></li>
                        <li><a href="#" onclick="day2Storm()">Day 2</a></li>
                        <li><a href="#" onclick="day3Storm()">Day 3</a></li>
                        <li><a href="#" onclick="day4Storm()">Day 4</a></li>
                       <%-- <li><a href="#" onclick="day5Storm()">Day 5</a></li>--%>
                    </ul>
                    
                </div>
                <div class="col-sm-4"><h4><span id="dayinfo"></span></h4></div>
            </div>
        </div>
    
       <%--<div id="weatherInfo" class="panel panel-default hidden" >
            <div class="panel-heading">
                <asp:Label ID="Label1" runat="server" Text="Weather Details"></asp:Label><br/>
                    <strong><span id="location"></span></strong>
            </div>
            <div class="panel-body">
                 <asp:Label ID="Label3" runat="server" Text="Wind : "></asp:Label>
                    <strong><span id="wind"></span></strong> <br />
                 <asp:Label ID="Label5" runat="server" Text="Ambient Temperature :"></asp:Label>
                    <strong><span id="temperature"></span></strong> <br />
                 <asp:Label ID="Label4" runat="server" Text="Relative Humidity : "></asp:Label>
                    <strong><span id="humidity"></span></strong> <br />
                 
            </div>
       </div>--%>


    </div>

 
        <div class="col-lg-9 col-sm-8 pull-right slider">

            <div class="slide active-slide col-lg-12" id="stormDiv" style="height:450px" runat="server">
                <div class="my-legend" id="legend" >
                <br/>
	            <div class='legend-scale'>
		            <ul class='legend-labels' >
			            <li><span style='background:#049cdb;'></span>75-88 km/h</li>
			            <li><span style='background:#46a546;'></span>89-102 km/h</li>
			            <li><span style='background:#ffc40d;'></span>103-117 km/h</li>
    			        <li><span style='background:#f89406;'></span>118-200 km/h</li>
			            <li><span style='background:red;'></span>200-230 km/h</li>
		            </ul>
	            </div>
            </div>
                <div id="stormMap" style="height:100%" class="col-lg-12"></div> &nbsp;
            </div>

            <div class="slide col-lg-12" id="weatherDiv" style="height:450px" runat="server">
           
                <div id="weatherMap" style="height:100%" class="col-lg-12"></div>
           
                  <div id="weatherlegend">
                    <table style="background-color:white">
                     
                    <tr>
                        <td><img src="http://openweathermap.org/img/w/01d.png" style="height:30px;width:30px" /></td>
                        <td>Clear Sky</td>
                    </tr>
                   <tr>
                         <td><img src="http://openweathermap.org/img/w/02d.png" style="height:30px;width:30px" /></td>
                        <td>Few Clouds</td>
                   </tr>
                      <tr>
                         <td><img src="http://openweathermap.org/img/w/03d.png " style="height:30px;width:30px" /></td>
                        <td>Scattered</td>
                   </tr>
                     <tr>
                         <td><img src="http://openweathermap.org/img/w/04d.png " style="height:30px;width:30px" /></td>
                        <td>Broken </td>
                   </tr>
                    <tr>
                         <td><img src="http://openweathermap.org/img/w/09d.png " style="height:30px;width:30px" /></td>
                        <td>Shower </td>
                   </tr>
                      <tr>
                         <td><img src="http://openweathermap.org/img/w/10d.png  " style="height:30px;width:30px" /></td>
                        <td>Rainy</td>
                   </tr>
                    <tr>
                         <td><img src="http://openweathermap.org/img/w/11d.png " style="height:30px;width:30px" /></td>
                        <td>Thunder</td>
                   </tr>
                    <tr>
                         <td><img src="http://openweathermap.org/img/w/13d.png " style="height:30px;width:30px" /></td>
                        <td>Snow</td>
                   </tr>
                    <tr>
                         <td><img src="http://openweathermap.org/img/w/50d.png " style="height:30px;width:30px" /></td>
                        <td>Mist</td>
                   </tr>
                     </table>
                </div>
                
           </div>
            
               
             
       
        
           <%-- 
            <asp:Label ID="Label1" runat="server" Height="0" Width="0"></asp:Label>
            <asp:Label ID="Label2" runat="server" Height="0" Width="0"></asp:Label>
            <asp:Label ID="Label3" runat="server" Height="0" Width="0"></asp:Label>
            <asp:Label ID="Label4" runat="server" Height="0" Width="0"></asp:Label>
            <asp:Label ID="Label5" runat="server" Height="0" Width="0"></asp:Label>
            <asp:Label ID="Label6" runat="server" Height="0" Width="0"></asp:Label>


            <asp:Label ID="Label7" runat="server" Height="0" Width="0"></asp:Label>
          <asp:Label ID="Label8" runat="server" Height="0" Width="0"></asp:Label>
          <asp:Label ID="Label9" runat="server" Height="0" Width="0"></asp:Label>
          <asp:Label ID="Label10" runat="server" Height="0" Width="0"></asp:Label>
          <asp:Label ID="Label11" runat="server" Height="0" Width="0"></asp:Label>


         <asp:Label ID="Label12" runat="server" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label13" runat="server" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label14" runat="server" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label15" runat="server" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label16" runat="server" Height="0" Width="0"></asp:Label>


         <asp:Label ID="Label17" runat="server" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label18" runat="server" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label19" runat="server" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label20" runat="server" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label21" runat="server" Height="0" Width="0"></asp:Label>


         <asp:Label ID="Label22" runat="server" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label23" runat="server" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label24" runat="server" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label25" runat="server" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label26" runat="server" Height="0" Width="0"></asp:Label>
      


         <asp:Label ID="Label27" runat="server" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label28" runat="server" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label29" runat="server" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label30" runat="server" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label31" runat="server" Height="0" Width="0"></asp:Label>

         <asp:Label ID="Label32" runat="server" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label33" runat="server" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label34" runat="server" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label35" runat="server" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label36" runat="server" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label37" runat="server" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label38" runat="server" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label39" runat="server" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label40" runat="server" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label41" runat="server" Height="0" Width="0"></asp:Label>

         <asp:Label ID="Label42" runat="server" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label43" runat="server" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label44" runat="server" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label45" runat="server" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label46" runat="server" Text="Label" Height="0" Width="0"></asp:Label>

         <asp:Label ID="Label47" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label48" runat="server" Text="Label" Height="0" Width="0"></asp:Label> 
         <asp:Label ID="Label49" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label50" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label51" runat="server" Text="Label" Height="0" Width="0"></asp:Label>

         <asp:Label ID="Label52" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label53" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label54" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label55" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label56" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
           
         <asp:Label ID="Label57" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label58" runat="server" Text="Label" Height="0" Width="0"></asp:Label> 
         <asp:Label ID="Label59" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label60" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label61" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         
        
        <asp:Label ID="Label62" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label63" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label64" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label65" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label66" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
        
         <asp:Label ID="Label67" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label68" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label69" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label70" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label71" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         
        <asp:Label ID="Label72" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label73" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label74" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label75" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label76" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         
        
        <asp:Label ID="Label77" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label78" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label79" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label80" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label81" runat="server" Text="Label" Height="0" Width="0"></asp:Label>

         <asp:Label ID="Label82" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label83" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label84" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label85" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label86" runat="server" Text="Label" Height="0" Width="0"></asp:Label>

         <asp:Label ID="Label87" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label88" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label89" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label90" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label91" runat="server" Text="Label" Height="0" Width="0"></asp:Label>

         <asp:Label ID="Label92" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label93" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label94" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label95" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label96" runat="server" Text="Label" Height="0" Width="0"></asp:Label>

         <asp:Label ID="Label97" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label98" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label99" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label100" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label101" runat="server" Text="Label" Height="0" Width="0"></asp:Label>

         <asp:Label ID="Label102" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label103" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label104" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label105" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label106" runat="server" Text="Label" Height="0" Width="0"></asp:Label>

         <asp:Label ID="Label107" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label108" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label109" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label110" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label111" runat="server" Text="Label" Height="0" Width="0"></asp:Label>

         <asp:Label ID="Label112" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label113" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label114" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label115" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label116" runat="server" Text="Label" Height="0" Width="0"></asp:Label>

         <asp:Label ID="Label117" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label118" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label119" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label120" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label121" runat="server" Text="Label" Height="0" Width="0"></asp:Label>

         <asp:Label ID="Label122" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label123" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label124" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label125" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label126" runat="server" Text="Label" Height="0" Width="0"></asp:Label>

        <asp:Label ID="Label127" runat="server" Text="Label" Height="0" Width="0"></asp:Label><asp:Label ID="Label128" runat="server" Text="Label" Height="0" Width="0"></asp:Label><asp:Label ID="Label129" runat="server" Text="Label" Height="0" Width="0"></asp:Label><asp:Label ID="Label130" runat="server" Text="Label" Height="0" Width="0"></asp:Label><asp:Label ID="Label131" runat="server" Text="Label" Height="0" Width="0"></asp:Label>

        <asp:Label ID="Label132" runat="server" Text="Label" Height="0" Width="0"></asp:Label><asp:Label ID="Label133" runat="server" Text="Label" Height="0" Width="0"></asp:Label><asp:Label ID="Label134" runat="server" Text="Label" Height="0" Width="0"></asp:Label><asp:Label ID="Label135" runat="server" Text="Label" Height="0" Width="0"></asp:Label><asp:Label ID="Label136" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
        <asp:Label ID="Label137" runat="server" Text="Label" Height="0" Width="0"></asp:Label><asp:Label ID="Label138" runat="server" Text="Label" Height="0" Width="0"></asp:Label><asp:Label ID="Label139" runat="server" Text="Label" Height="0" Width="0"></asp:Label><asp:Label ID="Label140" runat="server" Text="Label" Height="0" Width="0"></asp:Label><asp:Label ID="Label141" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
        <asp:Label ID="Label142" runat="server" Text="Label" Height="0" Width="0"></asp:Label><asp:Label ID="Label143" runat="server" Text="Label" Height="0" Width="0"></asp:Label><asp:Label ID="Label144" runat="server" Text="Label" Height="0" Width="0"></asp:Label><asp:Label ID="Label145" runat="server" Text="Label" Height="0" Width="0"></asp:Label><asp:Label ID="Label146" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
        <asp:Label ID="Label147" runat="server" Text="Label" Height="0" Width="0"></asp:Label>vv<asp:Label ID="Label148" runat="server" Text="Label" Height="0" Width="0"></asp:Label><asp:Label ID="Label149" runat="server" Text="Label" Height="0" Width="0"></asp:Label><asp:Label ID="Label150" runat="server" Text="Label" Height="0" Width="0"></asp:Label><asp:Label ID="Label151" runat="server" Text="Label" Height="0" Width="0"></asp:Label>

         <asp:Label ID="Label152" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label153" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label154" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label155" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label156" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label157" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label158" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label159" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label160" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label161" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label162" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label163" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label164" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label165" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label166" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label167" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label168" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label169" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label170" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label171" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label172" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label173" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label174" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label175" runat="server" Text="Label" Height="0" Width="0"></asp:Label> <asp:Label ID="Label176" runat="server" Text="Label" Height="0" Width="0"></asp:Label>

         <asp:Label ID="Label177" runat="server" Text="Label" Height="0" Width="0"></asp:Label>   <asp:Label ID="Label178" runat="server" Text="Label" Height="0" Width="0"></asp:Label>   <asp:Label ID="Label179" runat="server" Text="Label" Height="0" Width="0"></asp:Label>   <asp:Label ID="Label180" runat="server" Text="Label" Height="0" Width="0"></asp:Label>   <asp:Label ID="Label181" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label182" runat="server" Text="Label" Height="0" Width="0"></asp:Label>   <asp:Label ID="Label183" runat="server" Text="Label" Height="0" Width="0"></asp:Label>   <asp:Label ID="Label184" runat="server" Text="Label" Height="0" Width="0"></asp:Label>   <asp:Label ID="Label185" runat="server" Text="Label" Height="0" Width="0"></asp:Label>   <asp:Label ID="Label186" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label187" runat="server" Text="Label" Height="0" Width="0"></asp:Label>   <asp:Label ID="Label188" runat="server" Text="Label" Height="0" Width="0"></asp:Label>   <asp:Label ID="Label189" runat="server" Text="Label" Height="0" Width="0"></asp:Label>   <asp:Label ID="Label190" runat="server" Text="Label" Height="0" Width="0"></asp:Label>   <asp:Label ID="Label191" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label192" runat="server" Text="Label" Height="0" Width="0"></asp:Label>   <asp:Label ID="Label193" runat="server" Text="Label" Height="0" Width="0"></asp:Label>   <asp:Label ID="Label194" runat="server" Text="Label" Height="0" Width="0"></asp:Label>   <asp:Label ID="Label195" runat="server" Text="Label" Height="0" Width="0"></asp:Label>   <asp:Label ID="Label196" runat="server" Text="Label" Height="0" Width="0"></asp:Label>
         <asp:Label ID="Label197" runat="server" Text="Label" Height="0" Width="0"></asp:Label>   <asp:Label ID="Label198" runat="server" Text="Label" Height="0" Width="0"></asp:Label>   <asp:Label ID="Label199" runat="server" Text="Label" Height="0" Width="0"></asp:Label>   <asp:Label ID="Label200" runat="server" Text="Label" Height="0" Width="0"></asp:Label>   
         --%>
    
      
  </div>
 
    
            <%--<table id="weatherTable" class="table table-bordered">
                    <thead>
                    <tr style="background-color:#36648B;color:White">
                        <th>Province</th>
                        <th id="Th1">Temperature(celsius)</th>
                        <th>Humidity(%)</th>
                        <th>Pressure(hPa)</th>
                        <th>Wind Speed(m/s)</th>
                        <th>Wind Direction</th>
                        <th>Wind Condition</th>
                    </tr>
                    </thead>
                    <tbody style="background-color : #f6f6f6">
                    <tr>
                        <td><asp:Label ID="Label8" runat="server" Text="Pampanga"></asp:Label></td>
                        <td class="a"><asp:Label ID="lbl1" runat="server"></asp:Label></td>
                        <td class="b"><asp:Label ID="lbl2" runat="server"></asp:Label></td>
                        <td class="c"><asp:Label ID="lbl3" runat="server"></asp:Label></td>
                        <td class="d"><asp:Label ID="lbl4" runat="server"></asp:Label></td>
                        <td class="e"><asp:Label ID="lbl5" runat="server"></asp:Label></td>
                        <td class="f"><span id="wc1" runat="server"></span></td>
                    </tr>
                    <tr class="alt">
                        <td><asp:Label ID="Label13" runat="server" Text="Bulacan"></asp:Label></td>
                        <td class="a"><asp:Label ID="lbl6" runat="server"></asp:Label></td>
                        <td class="b"><asp:Label ID="lbl7" runat="server"></asp:Label></td>
                        <td class="c"><asp:Label ID="lbl8" runat="server"></asp:Label></td>
                        <td class="d"><asp:Label ID="lbl9" runat="server"></asp:Label></td>
                        <td class="e"><asp:Label ID="lbl10" runat="server"></asp:Label></td>
                        <td class="f"><span id="wc2" runat="server"></span></td>
                    </tr>
                    <tr>
                        <td><asp:Label ID="Label18" runat="server" Text="Metro Manila"></asp:Label></td>
                        <td class="a"><asp:Label ID="lbl11" runat="server"></asp:Label></td>
                        <td class="b"><asp:Label ID="lbl12" runat="server"></asp:Label></td>
                        <td class="c"><asp:Label ID="lbl13" runat="server"></asp:Label></td>
                        <td class="d"><asp:Label ID="lbl14" runat="server"></asp:Label></td>
                        <td class="e"><asp:Label ID="lbl15" runat="server"></asp:Label></td>
                        <td class="f"><span id="wc3" runat="server"></span></td>

                    </tr>
                    <tr class="alt">
                        <td><asp:Label ID="Label23" runat="server" Text="Rizal"></asp:Label></td>
                        <td class="a"><asp:Label ID="lbl16" runat="server"></asp:Label></td>
                        <td class="b"><asp:Label ID="lbl17" runat="server"></asp:Label></td>
                        <td class="c"><asp:Label ID="lbl18" runat="server"></asp:Label></td>
                        <td class="d"><asp:Label ID="lbl19" runat="server"></asp:Label></td>
                        <td class="e"><asp:Label ID="lbl20" runat="server"></asp:Label></td>
                        <td class="f"><span id="wc4" runat="server"></span></td>
                     </tr>
                    <tr>
                        <td><asp:Label ID="Label28" runat="server" Text="Cavite"></asp:Label></td>
                        <td class="a"><asp:Label ID="lbl21" runat="server"></asp:Label></td>
                        <td class="b"><asp:Label ID="lbl22" runat="server"></asp:Label></td>
                        <td class="c"><asp:Label ID="lbl23" runat="server"></asp:Label></td>
                        <td class="d"><asp:Label ID="lbl24" runat="server"></asp:Label></td>
                        <td class="e"><asp:Label ID="lbl25" runat="server"></asp:Label></td>
                        <td class="f"><span id="wc5" runat="server"></span></td>
                    </tr>
                    <tr class="alt">
                        <td><asp:Label ID="Label33" runat="server" Text="Laguna"></asp:Label></td>
                        <td class="a"><asp:Label ID="lbl26" runat="server"></asp:Label></td>
                        <td class="b"><asp:Label ID="lbl27" runat="server"></asp:Label></td>
                        <td class="c"><asp:Label ID="lbl28" runat="server"></asp:Label></td>
                        <td class="d"><asp:Label ID="lbl29" runat="server"></asp:Label></td>
                        <td class="e"><asp:Label ID="lbl30" runat="server"></asp:Label></td>
                        <td class="f"><span id="wc6" runat="server"></span></td>
                    </tr>
                    <tr>
                        <td><asp:Label ID="Label38" runat="server" Text="Quezon"></asp:Label></td>
                        <td class="a"><asp:Label ID="lbl31" runat="server"></asp:Label></td>
                        <td class="b"><asp:Label ID="lbl32" runat="server"></asp:Label></td>
                        <td class="c"><asp:Label ID="lbl33" runat="server"></asp:Label></td>
                        <td class="d"><asp:Label ID="lbl34" runat="server"></asp:Label></td>
                        <td class="e"><asp:Label ID="lbl35" runat="server"></asp:Label></td>
                        <td class="f"><span id="wc7" runat="server"></span></td>
                    </tr>
                    <tr class="alt">
                        <td><asp:Label ID="Label42" runat="server" Text="Batangas"></asp:Label></td>
                       <td class="a"><asp:Label ID="lbl36" runat="server"></asp:Label></td>
                        <td class="b"><asp:Label ID="lbl37" runat="server"></asp:Label></td>
                        <td class="c"><asp:Label ID="lbl38" runat="server"></asp:Label></td>
                        <td class="d"><asp:Label ID="lbl39" runat="server"></asp:Label></td>
                        <td class="e"><asp:Label ID="lbl40" runat="server"></asp:Label></td>
                        <td class="f"><span id="wc8" runat="server"></span></td>
                    </tr>
                    </tbody>
                 </table>--%>

          </div>

        </div>


        <div class="slider-nav col-lg-9 col-sm-8 pull-right" style="margin-top :inherit ">
             <a href="#" class="arrow-prev"><img src="IMG/arrow-prev.png" alt="" /></a>
             <ul class="slider-dots"> 
                   <li class="dot active-dot">&bull;</li>
                   <li class="dot ">&bull;</li>
            </ul>
            <a href="#" class="arrow-next"><img src="IMG/arrow-next.png"  alt="" /></a>
        </div> 
  

  </asp:Content>
