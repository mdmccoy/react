require 'sinatra'
require 'httparty'

get '/weather' do
    HTTParty.get('http://api.openweathermap.org/data/2.5/weather?q=Miami&appid=c38d29204353577f04f9a8b861e3c70e').body
end