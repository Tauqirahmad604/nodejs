<script setup>
import { format, parseISO, addYears } from "date-fns";

const selectedDate = ref(new Date());
const schedule = ref([]);

const formatDate = (date) => {
  return format(date, "EEEE, MMMM do, yyyy");
};

const addDay = () => {
  const formattedDate = format(selectedDate.value, "yyyy-MM-dd");
  if (!schedule.value.some((day) => day.date === formattedDate)) {
    schedule.value.push({
      date: formattedDate,
      isOpen: true,
      events: [],
    });
  } else {
    alert("This day already exists  select another day");
  }
};

const addEvent = (dayIndex) => {
  schedule.value[dayIndex].events.push({
    startTime: "09:00",
    endTime: "17:00",
  });
};

const removeEvent = (dayIndex, eventIndex) => {
  schedule.value[dayIndex].events.splice(eventIndex, 1);
};
</script>
<template>
  <div class="w-full">
    <div class="mb-8 flex gap-5">
      <v-date-picker
        v-model="selectedDate"
        mode="date"
        :min-date="new Date()"
        :max-date="addYears(new Date(), 1)"
      >
        <template v-slot="{ inputValue, inputEvents }">
          <input
            class="rounded-[12px] p-3 bg-[#fff] border-2 border-[#EFEFEF] text-[#1A1D1F] text-[15px] font-bold"
            :value="inputValue"
            v-on="inputEvents"
          />
        </template>
      </v-date-picker>
      <UButton color="blue" size="lg" @click="addDay"> Select a Date</UButton>
    </div>

    <div
      v-for="(daySchedule, dayIndex) in schedule"
      :key="daySchedule.date"
      class="day-schedule"
    >
      <div class="flex justify-start items-center flex-wrap gap-5 mb-8">
        <div>
          <h4 class="text-[16px] text-[#484B50] font-bold">
            {{ formatDate(parseISO(daySchedule.date)) }}
          </h4>
          <label class="block cursor-pointer">
            <input
              type="checkbox"
              v-model="daySchedule.isOpen"
              class="text-[14px] text-[#484B50] font-normal"
            />
            Closed
          </label>
        </div>
        <div
          v-for="(event, eventIndex) in daySchedule.events"
          :key="eventIndex"
          class="event-card flex justify-normal gap-[10px]"
        >
          <label for="start_time" class="relative">
            <span class="text-[12px] text-[#6F767E] absolute top-[2px] start-3"
              >Opens at</span
            >
            <input
              v-model="event.startTime"
              id="start_time"
              type="time"
              class="rounded-[12px] p-3 bg-[#fff] border-2 border-[#EFEFEF] text-[#1A1D1F] text-[15px] font-bold"
            />
          </label>
          <label for="start_time" class="relative">
            <span class="text-[12px] text-[#6F767E] absolute top-[2px] start-3"
              >Closes at</span
            >
            <input
              v-model="event.endTime"
              type="time"
              class="rounded-[12px] p-3 bg-[#fff] border-2 border-[#EFEFEF] text-[#1A1D1F] text-[15px] font-bold"
            />
          </label>

          <UButton
            variant="ghost"
            @click="removeEvent(dayIndex, eventIndex)"
            class="reset-btn p-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M12 22.0938C17.5228 22.0938 22 17.6166 22 12.0938C22 6.5709 17.5228 2.09375 12 2.09375C6.47715 2.09375 2 6.5709 2 12.0938C2 17.6166 6.47715 22.0938 12 22.0938Z"
                fill="#F25353"
              />
              <path
                d="M13.06 12.0941L15.36 9.7941C15.65 9.5041 15.65 9.0241 15.36 8.7341C15.07 8.4441 14.59 8.4441 14.3 8.7341L12 11.0341L9.69998 8.7341C9.40998 8.4441 8.92999 8.4441 8.63999 8.7341C8.34999 9.0241 8.34999 9.5041 8.63999 9.7941L10.94 12.0941L8.63999 14.3941C8.34999 14.6841 8.34999 15.1641 8.63999 15.4541C8.78999 15.6041 8.97999 15.6741 9.16999 15.6741C9.35999 15.6741 9.54998 15.6041 9.69998 15.4541L12 13.1541L14.3 15.4541C14.45 15.6041 14.64 15.6741 14.83 15.6741C15.02 15.6741 15.21 15.6041 15.36 15.4541C15.65 15.1641 15.65 14.6841 15.36 14.3941L13.06 12.0941Z"
                fill="#FFD1D1"
              />
            </svg>
          </UButton>
        </div>
        <button
          @click="addEvent(dayIndex)"
          class="text-[25px] text-[#a92d94] cursor-pointer font-bold reset-btn"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
