jQuery.IEPlaceHolder
====================

IEPlaceHolder is jQuery Plugin for Internet Explorer 7, 8 and 9

<code>
$(document).ready(function () {
	$.fn.iePlaceHolder({
    Class: 'place-holder',
    element: 'span'
  });
});
</code>

<h2>How it Works?</h2>
<p>This Plugin will read the input or textarea element's `placeholder` attribute and insert the new element before every form input / textarea</p>

<h2>Points to Remember</h2>
<p>
<ol>
 <li>Your Inputs / Textarea should have `Placeholder` attribute with value.</li>
 <li>You can able to change the placeholder container element type and their classes</li>
 <li>Placeholder has basic styles so it has to be styled as per your blocks.</li>
</ol>
</p>

<h2>Options</h2>
<dl>
  <dt>Class</dt>
    <dd>You can able to change the placeholder container's class name for updating few more styles.</dd>
  <dt>element</dt>
    <dd>You can able to change the placeholder container's element type (for example: span to div).</dd>
</dl>
