---
title: Getting Started
slug: getting-started
sectionType: successArticle
template: article.html
---

<p>Welcome to SaaSquatch! Let's get you running with your very own referral program.</p>

<h3><span class="label label-success">Step 1</span> Sign Up</h3>
<p>You need to <a href="http://www.referralsaasquatch.com/#sign-up">sign up</a> for a Referral SaaSquatch account before you can get started.</p>

<p>After you sign up a customer success squatch will reach out to you with your login credentials and help you with any questions you may have.</p>
<hr/>

<h3><span class="label label-success">Step 2</span> Connect Your Subscription System</h3>

<p>For quick setup, Referral SaaSquatch provides out of the box subscription system integrations with common platforms. Follow the links below for more details about your specific system.</p>

<ul>
    <li><a href="/braintree">Braintree</a></li>
    <li><a href="/recurly">Recurly</a></li>
    <li><a href="/stripe">Stripe</a></li>
    <li><a href="/zuora">Zuora</a></li>
    <li>Custom systems via Enterprise API</li>
</ul>

<p>If you don't see your subscription system listed please feel free to contact <a href="mailto:support@saasquat.ch">support@saasquat.ch</a> to help us prioritize when we will be able to offer it, or 
contact <a href="mailto:sales@saasquat.ch">sales@saasquat.ch</a> to talk to an account representative about getting access to our Enterprise API.</p>

<hr/>
<h3><span class="label label-success">Step 3</span> Install Referral SaaSquatch Client-Side</h3>
<p>After integrating your subscription system you install Referral SaaSquatch inside your app. Installation provides a complete end user experience, single sign on, and all required referral tracking.</p>

<hr/>

<h3>Guides</h3>
<div class="row-fluid" style="text-align: center;">
    
    <div class="span4">
        <a href="/guides/dollar-credit" class="btn btn-block btn-large docs-feature">
            <i class="fa fa-bank fa-3x"></i><br>
            Give $20 credit
        </a>
    </div>
    <div class="span4">
        <a href="/guides/percent-discount" class="btn btn-block btn-large docs-feature">
            <i class="fa fa-dollar fa-3x"></i><br/>
            Give 10% off
        </a>
    </div>
    <div class="span4">
        <a href="/stripe" class="btn btn-block btn-large docs-feature">
            <i class="fa fa-cc-stripe fa-3x"></i><br/>
            Stripe
        </a>
    </div>

</div>

<hr/>

<h3>References</h3>
<div class="row-fluid" style="text-align: center;">
    
    <div class="span4">
        <a href="/squatchjs" class="btn btn-block btn-large docs-feature">
            <i class="fa fa-html5 fa-3x"></i><br/>
            Squatch.js
        </a>
    </div>
    <div class="span4">
        <a href="/api" class="btn btn-block btn-large docs-feature">
            <i class="fa fa-desktop fa-3x"></i><br/>
            REST API
        </a>
    </div>
    <div class="span4">
        <a href="/mobile" class="btn btn-block btn-large docs-feature">
            <i class="fa fa-mobile fa-3x"></i><br/>
            Mobile
        </a>
    </div>
</div>

<script type="text/javascript">
    // This javascript redirects the anchor tags from www.referralsaasquatch.com/documentation to the new docs.referralsaasquatch.com formats
    // Closure-wrapped for security.
    (function () {
        var anchorMap = {
                "how-it-works": "/how-it-works",
                "braintree": "/braintree",
                "recurly": "/recurly",
                "stripe": "/stripe",
                "zuora": "/zuora",
                "app-integration": "/app-integration",
                "squatchjs-init": "/squatchjs#init",
                "squatchjs-autofill": "/squatchjs#autofill",
                "squatchjs-open": "/squatchjs#open",
                "squatchjs-close": "/squatchjs#close",
                "bestpractice-buttons": "/bestpractices/buttons",
                "bestpractice-speed": "/bestpractices/speed",
                "general": "/faq",
                "pricing": "/faq/pricing"
        }
        /*
        Best practice for extracting hashes:
        http://stackoverflow.com/a/10076097/151365
        */
        var hash = window.location.hash.substring(1);
        if (hash) {
            /*
            Best practice for javascript redirects: 
            http://stackoverflow.com/a/506004/151365
            */
            hash = hash.toLowerCase();
            window.location.replace(anchorMap[hash]);
        }
    })();
</script>