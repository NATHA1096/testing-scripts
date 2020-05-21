require 'calabash-android/calabash_steps'

Then(/^I scroll view "([^"]*)" "([^"]*)"$/) do |view,direction|
    scroll("#{view}",:"#{direction}")
end


Then(/^I scroll "([^"]*)" until I see "([^"]*)"$/) do |direction, id|
    q = query("* marked:'#{id}'")
    while q.empty?
      if direction == 'right'
        perform_action('drag',50,30,50,50,1)
      elsif direction == 'left'
        perform_action('drag',50,30,50,50,1)
      elsif direction == 'down'
        perform_action('drag',20,20,20,5,1)
      elsif direction == 'up'
        perform_action('drag',50,50,30,50,1)
      end
      q = query("* marked:'#{id}'")
    end
  end



