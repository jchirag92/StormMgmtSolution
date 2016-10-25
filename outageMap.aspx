<%@ Page Title="" Language="C#" MasterPageFile="~/meralco.Master" AutoEventWireup="true" CodeBehind="outageMap.aspx.cs" Inherits="meralcoTrial.outageMap" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

<link type="text/css" rel="Stylesheet" href="CSS/outageMapCSS.css" />




<%--Outage Info--%>


<div class="modal fade focus " id="showChart" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
                      <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <asp:Image ID="Image3" runat="server" ImageUrl="~/IMG/Meralco.jpg" CssClass="pull-left" Height="25px" Width="50px"/>  
                            <h4 class="modal-title" id="modalTitle">  Province-wise Outage Details</h4>
                       </div>
                      <div class="modal-body" style="text-align:center">
                            <div class="slider">
                                <div class="active-slide slide">
                                    <h2>PIE CHART</h2><br/>

                                    <iframe width="500" height="300" scrolling="no" frameborder="no" src="https://www.google.com/fusiontables/embedviz?containerId=googft-gviz-canvas&amp;q=select+col6%3E%3E0%2C+SUM(col7%3E%3E0)+from+19nHU2NcdGSeOzDfOTQacBOdZ_YMTimkNXFlPeSpU+group+by+col6%3E%3E0+order+by+col6%3E%3E0+asc+limit+8&amp;viz=GVIZ&amp;t=PIE&amp;uiversion=2&amp;gco_forceIFrame=true&amp;gco_hasLabelsColumn=true&amp;gco_useFirstColumnAsDomain=true&amp;gco_is3D=true&amp;gco_pieHole=0&amp;gco_booleanRole=certainty&amp;gco_colors=%5B%22%231155cc%22%2C%22%23DC3912%22%2C%22%23FF9900%22%2C%22%23109618%22%2C%22%23990099%22%2C%22%230099C6%22%2C%22%23DD4477%22%2C%22%2366AA00%22%2C%22%23B82E2E%22%2C%22%23316395%22%2C%22%23994499%22%2C%22%2322AA99%22%2C%22%23AAAA11%22%2C%22%236633CC%22%2C%22%23E67300%22%2C%22%238B0707%22%2C%22%23651067%22%2C%22%23329262%22%2C%22%235574A6%22%2C%22%233B3EAC%22%2C%22%23B77322%22%2C%22%2316D620%22%2C%22%23B91383%22%2C%22%23F4359E%22%2C%22%239C5935%22%2C%22%23A9C413%22%2C%22%232A778D%22%2C%22%23668D1C%22%2C%22%23BEA413%22%2C%22%230C5922%22%2C%22%23743411%22%5D&amp;gco_hAxis=%7B%22useFormatFromData%22%3Atrue%2C+%22viewWindow%22%3A%7B%22max%22%3Anull%2C+%22min%22%3Anull%7D%2C+%22minValue%22%3Anull%2C+%22maxValue%22%3Anull%7D&amp;gco_vAxes=%5B%7B%22useFormatFromData%22%3Atrue%2C+%22viewWindow%22%3A%7B%22max%22%3Anull%2C+%22min%22%3Anull%7D%2C+%22minValue%22%3Anull%2C+%22maxValue%22%3Anull%7D%2C%7B%22useFormatFromData%22%3Atrue%2C+%22viewWindow%22%3A%7B%22max%22%3Anull%2C+%22min%22%3Anull%7D%2C+%22minValue%22%3Anull%2C+%22maxValue%22%3Anull%7D%5D&amp;gco_legend=right&amp;gco_fontName=Verdana&amp;gco_pieSliceText=value&amp;gco_pieSliceTextStyle=%7B%22color%22%3A%22%23ffffff%22%2C+%22fontSize%22%3A%2214%22%7D&amp;gco_title=Province+-+Outages+&amp;gco_theme=maximized&amp;width=500&amp;height=300"></iframe>
                                </div>
                                <div class="slide">
                                     <h2>BAR GRAPH</h2>
                                    <iframe width="600" height="300" scrolling="no" frameborder="no" src="https://www.google.com/fusiontables/embedviz?containerId=googft-gviz-canvas&amp;q=select+col6%3E%3E0%2C+SUM(col7%3E%3E0)+from+19nHU2NcdGSeOzDfOTQacBOdZ_YMTimkNXFlPeSpU+group+by+col6%3E%3E0+order+by+col6%3E%3E0+asc+limit+8&amp;viz=GVIZ&amp;t=BAR&amp;uiversion=2&amp;gco_forceIFrame=true&amp;gco_hasLabelsColumn=true&amp;att=true&amp;width=500&amp;height=285"></iframe>
                                </div>
                            </div>
                             
                      </div>
                      
                      <div class="modal-footer">
                        <div class="slider-nav col-lg-12 pull-right" style="margin-top:inherit">
                                <a href="#" class="arrow-prev"><img src="IMG/arrow-prev.png" /></a>
                                <ul class="slider-dots"> 
                                    <li class="dot active-dot">&bull;</li>
                                    <li class="dot ">&bull;</li>
                                </ul>
                                <a href="#" class="arrow-next"><img src="IMG/arrow-next.png" /></a>
                            </div>
                          
                      </div>
        </div>
    </div>
</div>



<div class="col-lg-3 pull-left">
    <button type="button" class="btn btn-primary col-sm-12" data-toggle="modal" data-target="#showChart" id="showGraph">Province Wise Outage Chart</button>
    <br/><br/>
     <div class="input-group " id="searchby" style="height:60px; margin-top:10px;">
                        <input type="text" id="searchonMap" class="form-control" placeholder="Enter Province / City / Zipcode"/>
                            <span class="input-group-btn">
                                <button id="searchButton" class="btn btn-default glyphicon glyphicon-search" onclick="codeAddress()" type="button" style="margin-top : -28px"></button>
                            </span>
    </div>
     <div id="OutageInfo" >
        <div id="outageArea" class="panel panel-primary">
           <div class="panel-heading">
                Outage at : <br/><span id="areaName"></span>
           </div>
           <div class="panel-body">
                <ul>
                    <li>Outage ID : <span id="outageID" style="font-weight:bold ; font-style:italic"></span></li>
                    <li>Ouatge Type :<span id="outageType" style="font-weight:bold ; font-style:italic"></span></li>
                    <li>Status :<span id="status" style="font-weight:bold ; font-style:italic"></span></li>
                    <%--<li>No. Of Customer Impacted: </li><span id="custAffected"></span>
                    <li>No Of Critical Customers:</li><span id="criticalCust"></span>
                    <li>No Of Customers Called:</li><span id="custCalled"></span>
                    <li>No Of Customers Responded:</li><span id="custResponded"></span>--%>
                </ul>
           </div>
    </div>
        <div id="teamId" class="panel panel-primary">
           <div class="panel-heading">
            Team / Crew ID : <span id="crewId" style="font-weight:bold ; font-style:italic"></span>
           </div>
           <div class="panel-body">
            <ul>
                    <li>Start Time :<span id="startTime" style="font-weight:bold ; font-style:italic"></span></li>
                    <li>ETR Planned :<span id="etrPlan" style="font-weight:bold ; font-style:italic"></span></li>
                    <li>Crew Status :<span id="crewStatus" style="font-weight:bold ; font-style:italic"></span></li>
                    <li>Estimated Time of Crew :<span id="timeCrew" style="font-weight:bold ; font-style:italic" ></span></li>
                    <li>ETR Actual : <span id="etrActual" style="font-weight:bold ; font-style:italic"></span></li>
                </ul>
                
           </div>
    </div>
    </div>
</div>

<%--Outage Maps--%>
<div class="pull-right col-sm-9 ">
    <div class= "col-lg-12">

        <div class=" col-lg-12">
            <div id="cityOutages"></div>
            
            <input id="googft-legend-open" style="display:none" type="button" value="Legend" />
            <div id="googft-legend">
            <p id="googft-legend-title">Outages</p>
            <div>
                <span  id="i1" ><span class="googft-legend-swatch" style="background-color: #ff9900"></span></span>
                <span class="googft-legend-range" id="l1">0 to 30</span>
            </div>
            <div>
                <span  id="i2"><span class="googft-legend-swatch" style="background-color: #ffff00"></span></span>
                <span class="googft-legend-range" id="l2">31 to 60</span>
            </div>
            <div>
                <span  id="i3" ><span class="googft-legend-swatch" style="background-color: #00ffff"></span></span>
                <span class="googft-legend-range" id="l3">61 to 90</span>
            </div>
            <div>
                <span  id="i4"><span  class="googft-legend-swatch" style="background-color: #0000ff"></span></span>
                <span class="googft-legend-range" id="l4">91 to 150</span>
            </div>
            <div>
                <span id="i5"><span class="googft-legend-swatch" style="background-color: #9900ff"></span></span>
                <span class="googft-legend-range" id="l5"> >150</span>
            </div>
            <div class="googft-legend-source">
                <a href="data?docid=19nHU2NcdGSeOzDfOTQacBOdZ_YMTimkNXFlPeSpU" target="_blank">Source</a>
            
            
            </div>
            <input id="googft-legend-close" style="display:none" type="button" value="Hide"></input>
        </div>
        <br />
            
        </div>
     </div>

</div>

 
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.js"></script>



 <script type="text/javascript" src="JS/outageMapJS.js"></script>

</asp:Content>
