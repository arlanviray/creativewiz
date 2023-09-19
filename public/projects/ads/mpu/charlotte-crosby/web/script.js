/**
 * @author: Arlan Viray
 * @email: arlanv555@gmail.com
 */
!function(t,e,n){function o(){var e=new Date(2015,4,5,0,0),n=new Date,o=new Date(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes());o>=e&&i(),t("#timer").countdown({// Use this code to countdown from 10 seconds to test expiry event works
// until: '+0d +0h +0m +10s',
until:e,format:"DHMS",onExpiry:function(){i()}})}function i(){t("#timer").remove()}t(o)}(jQuery,window);