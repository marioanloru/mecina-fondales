<template>
  <v-layout wrap>
    <v-flex sm12 lg9 class="pl-3">
      <v-sheet height="500">
        <v-calendar
          ref="calendar"
          v-model="today"
          :type="type"
          color="primary"
          :weekdays="weekdays"
        >
          <template v-slot:day="{ date }">
            <template v-for="event in eventsMap[date]">
              <v-menu :key="event.title" v-model="event.open" offset-x>
                <template v-slot:activator="{ on }">
                  <div
                    v-if="!event.time"
                    v-ripple
                    class="my-event"
                    v-on="on"
                    v-html="event.title"
                  ></div>
                </template>
                <v-card color="grey lighten-4" min-width="350px" flat>
                  <v-toolbar color="primary" dark>
                    <v-toolbar-title v-html="event.title"></v-toolbar-title>
                  </v-toolbar>
                  <v-card-title>
                    <span>{{ event.details }}</span>
                  </v-card-title>
                </v-card>
              </v-menu>
            </template>
          </template>
        </v-calendar>
      </v-sheet>
    </v-flex>
    <v-container>
      <v-row>
        <v-col cols="2" style="padding-top: 0px; padding-bottom: 0px;">
          <v-btn fab small color="primary" @click="$refs.calendar.prev()">
            <v-icon dark>
              mdi-arrow-left
            </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="8" style="padding-top: 0px; padding-bottom: 0px;">
          <div
            style="display: flex; align-items: center; justify-content: center;"
          >
            <h2>{{ getDate(today) }}</h2>
          </div>
          <!--<v-menu
            ref="startMenu"
            v-model="startMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="today"
            transition="scale-transition"
            min-width="290px"
            offset-y
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="today"
                label="Fecha"
                prepend-icon="mdi-calendar"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="today" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="startMenu = false">
                Cancelar
              </v-btn>
              <v-btn flat color="primary" @click="$refs.startMenu.save(today)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>-->
        </v-col>
        <v-col cols="2" style="padding-top: 0px; padding-bottom: 0px;">
          <v-btn
            fab
            small
            absolute
            right
            color="primary"
            @click="$refs.calendar.next()"
          >
            <v-icon dark>
              mdi-arrow-right
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
const intervalsDefault = {
  first: 0,
  minutes: 60,
  count: 24,
  height: 40
};

const stylings = {
  default(interval) {
    console.log(interval);
    return undefined;
  },
  workday(interval) {
    const inactive =
      interval.weekday === 0 ||
      interval.weekday === 6 ||
      interval.hour < 9 ||
      interval.hour >= 17;
    const startOfHour = interval.minute === 0;
    const dark = this.dark;
    const mid = dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";

    return {
      backgroundColor: inactive
        ? dark
          ? "rgba(0,0,0,0.4)"
          : "rgba(0,0,0,0.05)"
        : undefined,
      borderTop: startOfHour ? undefined : "1px dashed " + mid
    };
  },
  past(interval) {
    return {
      backgroundColor: interval.past
        ? this.dark
          ? "rgba(0,0,0,0.4)"
          : "rgba(0,0,0,0.05)"
        : undefined
    };
  }
};

export default {
  data: () => ({
    startMenu: false,
    today: new Date().toISOString().split("T")[0],
    endMenu: false,
    nowMenu: false,
    minWeeks: 1,
    now: null,
    type: "month",
    weekdays: [1, 2, 3, 4, 5, 6, 0],
    intervals: intervalsDefault,
    maxDays: 7,
    styleInterval: "default",
    color: "primary",
    events: [
      {
        title: "Fiestas",
        details: "Fiestas de la Virgen del Rosario",
        date: "2020-10-01",
        open: false
      },
      {
        title: "Fiestas",
        details: "Fiestas de la Virgen del Rosario",
        date: "2020-10-02",
        open: false
      },
      {
        title: "Fiestas",
        details: "Fiestas de la Virgen del Rosario",
        date: "2020-10-03",
        open: false
      }
    ]
  }),
  computed: {
    intervalStyle() {
      return stylings[this.styleInterval].bind(this);
    },
    hasIntervals() {
      return (
        this.type in
        {
          week: 1,
          day: 1,
          "4day": 1,
          "custom-daily": 1
        }
      );
    },
    hasEnd() {
      return (
        this.type in
        {
          "custom-weekly": 1,
          "custom-daily": 1
        }
      );
    },
    eventsMap() {
      const map = {};
      this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e));
      return map;
    }
  },
  methods: {
    showIntervalLabel(interval) {
      return interval.minute === 0;
    },
    getYear(date) {
      return date.split("-")[0];
    }
  }
};
</script>

<style scoped>
.feature-pane {
  position: relative;
  padding-top: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.day-header {
  margin: 0px 2px 2px 2px;
  padding: 2px 6px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  border-radius: 2px;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.day-body {
  position: absolute;
  top: 400px;
  height: 36px;
  margin: 2px;
  padding: 2px 6px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  border-radius: 2px;
  left: 0;
  right: 0;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.day {
  position: relative;
  height: 24px;
  margin: 0px;
  padding: 0px 6px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  border-radius: 2px;
  left: 0;
  right: 0;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  width: 100%;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
}
</style>
